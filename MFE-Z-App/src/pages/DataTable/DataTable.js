import React from 'react';
import { Link } from "react-router-dom";
import EditableDataTable from '../../components/EditableDataTable/EditableDataTable';

function DataTable() {
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <h1>Data Table</h1>

            <EditableDataTable />

            <Link to='/' style={{
                color: 'white',
                display: 'block',
                marginTop: '20px'
            }}>Take me back...</Link>
        </div>
    );
}

export default DataTable;