import { useState } from "react";
import { ICelularModel } from "../../../@libs/types";
import CelularModelForm from "./form";

function CelularModelCreatePage() {
  const [celularModel, setCelularModel] = useState<ICelularModel>({
    name: "",
    factory: {},
  } as ICelularModel);

  return (
    <CelularModelForm
      celularModel={celularModel}
      setCelularModel={setCelularModel}
      showForm={true}
    />
  );
}

export default CelularModelCreatePage;
