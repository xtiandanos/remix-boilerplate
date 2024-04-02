import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { ColDef } from '@ag-grid-community/core';

import SideBar from "~/components/SideBar";


interface IRow {
        name: string;
        prefferedName: string;
        email: string;
    }

export default function CustomersPage() {
        const data = [
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
            { name: "June Rodney Pavia", prefferedName: "Hunyo", email: 'june.pavia@gmail.com' },
        ];
        
        const colTitle = [
            { field: "name" },
            { field: "prefferedName" },
            { field: "email" },
          ];

        const pagination = true;
        const paginationPageSize = 10;
        const paginationPageSizeSelector = [50, 100, 500];
        
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [rowData, setRowData] = useState<IRow[]>(data);
        
        // Column Definitions: Defines the columns to be displayed.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [colDefs, setColDefs] = useState<ColDef<IRow>[]>(colTitle);

    return (
        <div className="flex">
            <SideBar />
            <div
                className="ag-theme-quartz px-7" // applying the grid theme
                style={{ height: 500 }} // the grid will fill the size of the parent container
                >
                <h1 className="text-2xl font-semibold py-10">Customers</h1>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={colDefs}
                    pagination={pagination}
                    paginationPageSize={paginationPageSize}
                    paginationPageSizeSelector={paginationPageSizeSelector}
                />
            </div>
        </div>
    );
}