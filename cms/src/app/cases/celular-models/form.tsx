import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ICelularFactory, ICelularModel } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useEffect, useState } from "react";
import { CelularModelService } from "../../../services/celular-model.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CelularFactoryService } from "../../../services/celular-factory.service";

type CelularModelFormProps = {
  celularModel: ICelularModel;
  setCelularModel: (celularModel: ICelularModel) => void;
  showForm: boolean;
};
function CelularModelForm({
  celularModel,
  setCelularModel,
  showForm,
}: CelularModelFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [factories, setFactories] = useState<ICelularFactory[]>([]);

  useEffect(() => {
    CelularFactoryService.getAll()
      .then((result) => {
        setFactories(result.data);
      })
      .catch((error) => toast.error(String(error)));
  }, []);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = celularModel.id
      ? CelularModelService.update(celularModel.id, celularModel)
      : CelularModelService.create(celularModel);

    serviceEvent
      .then(() => {
        toast.success("Registro atualizado com sucesso!");
        navigate("/celular-models");
      })
      .catch((error) => toast.error(String(error)))
      .finally(() => setLoading(false));
  };
  const handleDelete = () => {
    setLoading(true);

    if (celularModel.id) {
      CelularModelService.remove(celularModel.id)
        .then(() => {
          toast.success("Registro excluído com sucesso!");
          navigate("/celular-models");
        })
        .catch((error) => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;

    const selected = factories.find((item) => item.id === value);
    setCelularModel({ ...celularModel, factory: selected! });
  };

  return (
    <SideForm
      open={showForm}
      title="Cadastro de Modelos"
      loading={loading}
      onSave={handleSave}
      {...(celularModel.id && { onDelete: handleDelete })}
    >
      <FormControl fullWidth size="small" margin="normal" required>
        <InputLabel>Montadora</InputLabel>
        <Select
          value={celularModel.factory?.id || ""}
          onChange={handleChange}
          label="Montadora"
        >
          {factories.map((factory) => (
            <MenuItem key={factory.id} value={factory.id}>
              {factory.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        required
        label="Nome Modelo"
        variant="outlined"
        size="small"
        value={celularModel.name}
        onChange={(event) =>
          setCelularModel({ ...celularModel, name: event.target.value })
        }
      />
    </SideForm>
  );
}

export default CelularModelForm;
