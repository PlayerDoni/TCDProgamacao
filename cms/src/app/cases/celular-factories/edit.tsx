import { useEffect, useState } from "react";
import CelularFactoryForm from "./form";
import { ICelularFactory } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { CelularFactoryService } from "../../../services/celular-factory.service";
import { toast } from "react-toastify";

function CelularFactoryEditPage() {
  const params = useParams();

  const [celularFactory, setCelularFactory] = useState<ICelularFactory>({
    name: "",
  } as ICelularFactory);

  useEffect(() => {
    if (params?.id) {
      CelularFactoryService.getById(params.id)
        .then((result) => {
          setCelularFactory(result.data);
        })
        .catch((error) => toast.error(String(error)));
    }
  }, [params]);

  return (
    <CelularFactoryForm
      celularFactory={celularFactory}
      setCelularFactory={setCelularFactory}
      showForm={true}
    />
  );
}

export default CelularFactoryEditPage;
