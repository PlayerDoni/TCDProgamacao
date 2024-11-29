import { TextField } from "@mui/material";
import { ICelularType } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { CelularTypeService } from "../../../services/celular-type.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type CelularTypeFormProps = {
  celularType: ICelularType;
  setCelularType: (celularType: ICelularType) => void;
  showForm: boolean;
};
function CelularTypeForm({
  celularType,
  setCelularType,
  showForm,
}: CelularTypeFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = celularType.id
      ? CelularTypeService.update(celularType.id, celularType)
      : CelularTypeService.create(celularType);

    serviceEvent
      .then(() => {
        toast.success("Registro atualizado com sucesso!");
        navigate("/celular-types");
      })
      .catch((error) => toast.error(String(error)))
      .finally(() => setLoading(false));

    // if (celularType.id) {
    //   CelularTypeService.update(celularType.id, celularType)
    //     .then(() => {
    //       toast.success('Registro atualizado com sucesso!');
    //       navigate('/celular-types');
    //     })
    //     .catch(error => toast.error(String(error)))
    //     .finally(() => setLoading(false))
    // } else {
    //   CelularTypeService.create(celularType)
    //     .then(() => {
    //       toast.success('Registro incluído com sucesso!');
    //       navigate('/celular-types');
    //     })
    //     .catch(error => toast.error(String(error)))
    //     .finally(() => setLoading(false))
    // }
  };
  const handleDelete = () => {
    setLoading(true);

    if (celularType.id) {
      CelularTypeService.remove(celularType.id)
        .then(() => {
          toast.success("Registro excluído com sucesso!");
          navigate("/celular-types");
        })
        .catch((error) => toast.error(String(error)))
        .finally(() => setLoading(false));
    }
  };
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Tipo de Celular"
      loading={loading}
      onSave={handleSave}
      {...(celularType.id && { onDelete: handleDelete })}
    >
      <TextField
        fullWidth
        required
        autoFocus
        label="Tipo do Celular"
        variant="outlined"
        size="small"
        value={celularType.name}
        onChange={(event) =>
          setCelularType({ ...celularType, name: event.target.value })
        }
      />
    </SideForm>
  );
}

export default CelularTypeForm;
