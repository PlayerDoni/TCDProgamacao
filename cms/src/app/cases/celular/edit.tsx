import { useEffect, useState } from "react";
import CelularForm from "./form";
import { ICelular } from "../../../@libs/types";
import { useParams } from "react-router-dom";
import { CelularService } from "../../../services/celular.service";
import { toast } from "react-toastify";

function CelularEditPage() {
  const params = useParams();

  const [celular, setCelular] = useState<ICelular>({
    description: "",
    photo: "",
    yearFactory: 2024,
    yearModel: 2024,
    priceRent: 0,
    type: {},
    model: {},
  } as ICelular);

  useEffect(() => {
    if (params?.id) {
      CelularService.getById(params.id)
        .then((result) => {
          setCelular(result.data);
        })
        .catch((error) => toast.error(String(error)));
    }
  }, [params]);

  return (
    <CelularForm celular={celular} setCelular={setCelular} showForm={true} />
  );
}

export default CelularEditPage;
