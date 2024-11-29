import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import CelularTypeDataGrid from "./datagrid";

function CelularTypeLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/celular-types/new", { replace: true });
  };

  return (
    <Stack className="page-container">
      <BreadCrumb title="Cadastro de Tipo de celulares" />
      <Box
        display="flex"
        width="100% "
        justifyContent="end"
        marginBottom="1rem"
      >
        <Button variant="contained" onClick={handleCreate}>
          <AddIcon />
          Adicionar
        </Button>
      </Box>

      <CelularTypeDataGrid />

      <Outlet />
    </Stack>
  );
}

export default CelularTypeLayout;
