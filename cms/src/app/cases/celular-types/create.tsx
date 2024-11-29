import { useState } from "react";
import { ICelularType } from "../../../@libs/types";
import CelularTypeForm from "./form";

function CelularTypeCreatePage() {
  const [celularType, setCelularType] = useState<ICelularType>({
    name: "",
  } as ICelularType);

  return (
    <CelularTypeForm
      celularType={celularType}
      setCelularType={setCelularType}
      showForm={true}
    />
  );
}

export default CelularTypeCreatePage;
