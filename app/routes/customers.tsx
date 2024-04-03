import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef } from '@ag-grid-community/core';
import { useLoaderData } from "@remix-run/react";

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

export async function loader() {
    const paginationSettings: IPaginationSettings = {
        enabled: true,
        pageSize: 10,
        pageSizeOptions: [50, 100, 500],
    };

    const data = [
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
    ];

    return { data, paginationSettings };
}

export default function CustomersPage() {
    const { data, paginationSettings } = useLoaderData<{ data: IRow[], paginationSettings: IPaginationSettings }>() || { data: [], paginationSettings: { enabled: false, pageSize: 10, pageSizeOptions: [10, 20, 50] } };

    const colTitle: ColDef[] = [
        { field: "name" },
        { field: "prefferedName" },
        { field: "email" },
    ];
    
    const [rowData, setRowData] = useState<IRow[]>(data || []);
    const [colDefs, setColDefs] = useState<ColDef<IRow>[]>(colTitle);

    useEffect(() => {
        if (data === undefined) {
            console.log("Data is still loading...");
        } else {
            setRowData(data);
        }
    }, [data]);

    return (
        <div className="flex">
            <SideBar />
            <div className="ag-theme-quartz px-7" style={{ height: 500 }}>
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
