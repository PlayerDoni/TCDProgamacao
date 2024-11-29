import { useState } from "react";
import { ICelularModel } from "../../../@libs/types";
import CelularModelForm from "./form";

function CelularModelCreatePage() {
  const [celular, setCelularModel] = useState<ICelularModel>({
    name: "",
    factory: {},
  } as ICelularModel);

  return (
    <CelularModelForm
      celular={celular}
      setCelularModel={setCelularModel}
      showForm={true}
    />
  );
}

export default CelularModelCreatePage;
