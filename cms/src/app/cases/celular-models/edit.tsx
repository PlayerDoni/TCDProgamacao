import { useEffect, useState } from "react";
import CelularModelForm from "./form";
import { ICelularModel } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { CelularModelService } from "../../../services/celular-model.service";
import { toast } from "react-toastify";

function CelularModelEditPage() {
  const params = useParams();

  const [celularModel, setCelularModel] = useState<ICelularModel>({
    name: "",
    factory: {},
  } as ICelularModel);

  useEffect(() => {
    if (params?.id) {
      CelularModelService.getById(params.id)
        .then((result) => {
          setCelularModel(result.data);
        })
        .catch((error) => toast.error(String(error)));
    }
  }, [params]);

  return (
    <CelularModelForm
      celularModel={celularModel}
      setCelularModel={setCelularModel}
      showForm={true}
    />
  );
}

export default CelularModelEditPage;
