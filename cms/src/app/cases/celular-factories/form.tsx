import { TextField } from "@mui/material";
import { ICelularFactory } from "../../../@libs/types";
import SideForm from "../../components/ui/side-form";
import { useState } from "react";
import { CelularFactoryService } from "../../../services/celular-factory.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type CelularFactoryFormProps = {
  celularFactory: ICelularFactory;
  setCelularFactory: (celularFactory: ICelularFactory) => void;
  showForm: boolean;
}
function CelularFactoryForm({
  celularFactory,
  setCelularFactory,
  showForm
}: CelularFactoryFormProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSave = () => {
    setLoading(true);

    const serviceEvent = (celularFactory.id) ? 
        CelularFactoryService.update(celularFactory.id, celularFactory) :  
            CelularFactoryService.create(celularFactory);

    serviceEvent
      .then(() => {
        toast.success('Registro atualizado com sucesso!');
        navigate('/celular-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
  }
  const handleDelete = () => {
    setLoading(true);

    if (celularFactory.id) {
      CelularFactoryService.remove(celularFactory.id)
        .then(() => {
        toast.success('Registro excluído com sucesso!');
        navigate('/celular-factories');
      })
      .catch(error => toast.error(String(error)))
      .finally(() => setLoading(false))
    }
  }
  return (
    <SideForm
      open={showForm}
      title="Cadastro de Fabricante"
      loading={loading}
      onSave={handleSave}
      {...(celularFactory.id && {onDelete: handleDelete})}
    >
      <TextField 
        fullWidth
        required
        autoFocus
        label="Nome Fabricante"
        variant="outlined"
        size="small"
        value={celularFactory.name}
        onChange={event => setCelularFactory({...celularFactory, name: event.target.value})}
      />
    </SideForm>
  )
}

export default CelularFactoryForm;