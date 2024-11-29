import { Box, Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BreadCrumb from "../../components/ui/bread-crumb";
import { Outlet, useNavigate } from "react-router-dom";
import CelularFactoryDataGrid from "./datagrid";

function CelularFactoryLayout() {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/celular-factories/new", { replace: true });
  };

  return (
    <Stack className="page-container">
      <BreadCrumb title="Cadastro de Fabricantes" />
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

      <CelularFactoryDataGrid />

      <Outlet />
    </Stack>
  );
}

export default CelularFactoryLayout;
