import { useEffect, useState } from "react";
import CelularTypeForm from "./form";
import { ICelularType } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { CelularTypeService } from "../../../services/celular-type.service";
import { toast } from "react-toastify";

function CelularTypeEditPage() {
  const params = useParams();

  const [celularType, setCelularType] = useState<ICelularType>({
    name: "",
  } as ICelularType);

  useEffect(() => {
    if (params?.id) {
      CelularTypeService.getById(params.id)
        .then((result) => {
          setCelularType(result.data);
        })
        .catch((error) => toast.error(String(error)));
    }
  }, [params]);

  return (
    <CelularTypeForm
      celularType={celularType}
      setCelularType={setCelularType}
      showForm={true}
    />
  );
}

export default CelularTypeEditPage;
