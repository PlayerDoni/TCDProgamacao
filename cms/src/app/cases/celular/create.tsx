import { useState } from "react";
import { ICelular } from "../../../@libs/types";
import CelularForm from "./form";

function CelularCreatePage() {
  const [celular, setCelular] = useState<ICelular>({
    description: "",
    photo: "",
    yearFactory: 2024,
    yearModel: 2024,
    priceRent: 0,
    type: {},
    model: {},
  } as ICelular);

  return (
    <CelularForm celular={celular} setCelular={setCelular} showForm={true} />
  );
}

export default CelularCreatePage;
