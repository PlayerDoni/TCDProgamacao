import { Paper } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { ICelularType } from "../../../@libs/types";
import { CelularTypeService } from "../../../services/celular-type.service";
import ActionMenu from "../../components/ui/action-menu";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

//Definições das Colunas
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Código Identificação",
    resizable: false,
    width: 350,
  },
  {
    field: "name",
    headerName: "Tipo do Celular",
    resizable: false,
    flex: 1,
  },
  {
    field: "action",
    headerName: "",
    resizable: false,
    sortable: false,
    disableColumnMenu: true,
    align: "right",
    width: 100,
    renderCell: (params: GridRenderCellParams) => (
      <ActionMenu itemId={params.row.id} />
    ),
  },
];

function CelularTypeDataGrid() {
  const location = useLocation();

  const [celularTypes, setCelularTypes] = useState<ICelularType[]>([]);

  useEffect(() => {
    CelularTypeService.getAll()
      .then((result) => {
        setCelularTypes(result.data);
      })
      .catch((error) => toast.error(String(error)));
  }, [location]);

  return (
    <Paper
      sx={{
        height: "90%",
        width: "100%",
      }}
    >
      <DataGrid
        rows={celularTypes}
        columns={columns}
        sx={{
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
        }}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      />
    </Paper>
  );
}

export default CelularTypeDataGrid;
