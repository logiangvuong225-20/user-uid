import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'image',
        headerName: 'Avatar',
        width: 70,
        height: 70,
        editable: true,
        renderCell: (params) => <img style={{ borderRadius: '50%', width: "100%" }} src={params.value} />, // renderCell will render the component
    },
    {
        field: 'hoten',
        headerName: 'Họ và tên',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        editable: true,
    },
    {
        field: 'tongsodienthoai',
        headerName: 'Tổng số SĐT đã quét',
        type: 'number',
        width: 200,
        editable: true,
    },
    {
        field: 'soluotquet',
        headerName: 'Số lượt quét',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'hansudung',
        headerName: 'Hạn sử dụng',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        editable: true,
    },
    {
        field: 'chitiet',
        headerName: 'Xem chi tiết',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        editable: true,
    },
];

const rows = [
    {
        id: 1, image: "https://mui.com/static/images/avatar/1.jpg", hoten: 'Vũ Văn Nam', email: 'vuvannam@wikiland.vn', tongsodienthoai: 30, soluotquet: 30,hansudung:"0",chitiet:"Xem"
    },
      {
        id: 2, image: "https://mui.com/static/images/avatar/1.jpg", hoten: 'Vũ Văn Nam', email: 'vuvannam@wikiland.vn', tongsodienthoai: 30, soluotquet: 30,hansudung:"0"
    },

];

export default function DataGridDemo() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                
            />
        </div>
    );
}
