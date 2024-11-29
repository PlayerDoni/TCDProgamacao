import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import { ICelular, ICelularModel, ICelularType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { ChangeEvent, useEffect, useState } from "react";
import { CelularService } from "../../../services/celular.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { CelularTypeService } from "../../../services/celular-type.service";
import { CelularModelService } from "../../../services/celular-model.service";
import { LoadingButton } from "@mui/lab";

type CelularFormProps = {
  celular: ICelular;
  setCelular: (celular: ICelular) => void;
  showForm: boolean;
};
function CelularForm({ celular, setCelular, showForm }: CelularFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const [celularTypes, setCelularesTypes] = useState<ICelularType[]>([]);
  const [celularModels, setCelularesModels] = useState<ICelularModel[]>([]);

  useEffect(() => {
    CelularTypeService.getAll().then((result) => {
      setCelularesTypes(result.data);
    });

    CelularModelService.getAll().then((result) => {
      setCelularesModels(result.data);
    });
  }, []);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = celular.id
      ? CelularService.update(celular.id, celular)
      : CelularService.create(celular);

    serviceEvent
      .then(() => {
        toast.success("Registro atualizado com sucesso!");
        navigate("/celulars");
      })
      .catch((error) => toast.error(String(error)))
      .finally(() => setLoading(false));
  };
  const handleDelete = () => {
    setLoading(true);

    if (celular.id) {
      CelularService.remove(celular.id)
        .then(() => {
          toast.success("Registro excluído com sucesso!");
          navigate("/celulars");
        })
        .catch((error) => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  };

  const handleChangeType = (event: SelectChangeEvent) => {
    const { value } = event.target;
    const seleted = celularTypes.find((item) => item.id === value);

    setCelular({ ...celular, type: seleted! });
  };

  const handleChangeModel = (event: SelectChangeEvent) => {
    const { value } = event.target;
    const seleted = celularModels.find((item) => item.id === value);

    setCelular({ ...celular, model: seleted! });
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    setLoading(true);

    if (files && files[0]) {
      const file = files[0];

      CelularService.upload(file)
        .then((result) => {
          if (result.data) {
            const { fullPath } = result.data;
            setCelular({ ...celular, photo: fullPath });
          }
        })
        .catch((error) => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  };
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Celulares"
      loading={loading}
      onSave={handleSave}
      {...(celular.id && { onDelete: handleDelete })}
    >
      <FormControl fullWidth size="small">
        <InputLabel id="select-type">Tipo Celular</InputLabel>
        <Select
          labelId="select-type"
          label="Tipo Celular"
          value={celular.type.id || ""}
          onChange={handleChangeType}
        >
          {celularTypes.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth size="small">
        <InputLabel id="select-model">Modelo Celular</InputLabel>
        <Select
          labelId="select-model"
          label="Modelo Celular"
          value={celular.model.id || ""}
          onChange={handleChangeModel}
        >
          {celularModels.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Stack direction="row" gap={1}>
        <TextField
          required
          label="Ano Fabrição"
          variant="outlined"
          size="small"
          value={celular.yearFactory}
          onChange={(event) =>
            setCelular({ ...celular, yearFactory: Number(event.target.value) })
          }
        />
        <TextField
          required
          label="Ano Modelo"
          variant="outlined"
          size="small"
          value={celular.yearModel}
          onChange={(event) =>
            setCelular({ ...celular, yearModel: Number(event.target.value) })
          }
        />
        <TextField
          fullWidth
          required
          label="Preço Diário"
          variant="outlined"
          size="small"
          value={celular.priceRent}
          onChange={(event) =>
            setCelular({ ...celular, priceRent: Number(event.target.value) })
          }
        />
      </Stack>
      <TextField
        fullWidth
        required
        multiline
        rows={4}
        label="Descrição"
        variant="outlined"
        size="small"
        value={celular.description}
        onChange={(event) =>
          setCelular({ ...celular, description: event.target.value })
        }
      />

      <fieldset className="form-fieldset">
        <legend>
          <Typography
            variant="caption"
            sx={{
              color: "rgba(0,0,0,0,6)",
            }}
          >
            Foto do Celular
          </Typography>
        </legend>

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="1rem"
          gap="1rem"
        >
          {celular.photo && (
            <img
              alt={celular.model.name}
              src={`${import.meta.env.VITE_SUPABASE_STORAGE_URL}/${celular.photo}`}
              style={{
                width: "320px",
              }}
            />
          )}
          <LoadingButton variant="outlined" component="label" loading={loading}>
            <BackupOutlinedIcon
              sx={{
                marginRight: "1rem",
              }}
            />
            Escolher Imagem
            <input type="file" hidden onChange={handleChangeFile} />
          </LoadingButton>
        </Stack>
      </fieldset>
    </SideForm>
  );
}

export default CelularForm;
