import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from '@ag-grid-community/core';
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";

import { createServerClient } from '@supabase/auth-helpers-remix';


import SideBar from "~/components/SideBar";

interface IRow {
    name: string;
    prefferedName: string;
    email: string;
}

interface IPaginationSettings {
    enabled: boolean;
    pageSize: number;
    pageSizeOptions: number[];
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const response = new Response()
    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      { request, response }
    )

    const { data } = await supabase.from('customers').select();

    const paginationSettings: IPaginationSettings = {
        enabled: true,
        pageSize: 10,
        pageSizeOptions: [10, 100, 500],
    };
    return { data, paginationSettings };
}

export default function CustomersPage() {
    const { data, paginationSettings } = useLoaderData<{ data: IRow[], paginationSettings: IPaginationSettings }>() || { data: [], paginationSettings: { enabled: false, pageSize: 10, pageSizeOptions: [10, 20, 50] }, supaData: {} };
    const colTitle: ColDef[] = [
        { field: "name" },
        { field: "preffered_name", headerName: "Preferred Name" },
        { field: "email" },
        { field: "created_at", headerName: "Date Created", flex: 2 }
    ];
    
    const [rowData] = useState<IRow[]>(data || []);
    const [colDefs] = useState<ColDef<IRow>[]>(colTitle);

    return (
        <div className="flex">
            <SideBar />
            <div className="ag-theme-quartz px-7" style={{ width: '100%', height: 500 }}>
                <h1 className="text-2xl font-semibold py-10">Customers</h1>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    pagination={paginationSettings?.enabled}
                    paginationPageSize={paginationSettings?.pageSize}
                    paginationPageSizeSelector={paginationSettings?.pageSizeOptions}
                />
            </div>
        </div>
    );
}

