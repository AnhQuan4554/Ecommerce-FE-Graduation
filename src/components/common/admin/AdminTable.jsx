import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const AdminTable = ({ currentData, columns, setRowSelectionModel }) => {
  return (
    <DataGrid
      getRowId={(row) => row._id}
      rows={currentData && currentData}
      rowHeight={80}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
      onRowSelectionModelChange={(newRowSelectionModel) => {
        setRowSelectionModel(newRowSelectionModel);
      }}
      slots={{
        toolbar: GridToolbar,
      }}
      slotProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
      hideFooterSelectedRowCount
      localeText={{
        toolbarExport: "Tải xuống",
        toolbarExportCSV: "Tải xuống dưới dạng CSV",
        toolbarExportPrint: "In",
        toolbarDensity: "Tùy chỉnh cột",
        toolbarFilters: "Lọc",
        toolbarColumns: "Định dạng cột",
      }}
    />
  );
};

export default AdminTable;
