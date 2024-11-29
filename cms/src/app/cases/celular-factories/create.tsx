import { useState } from "react";
import { ICelularFactory } from "../../../@libs/types";
import CelularFactoryForm from "./form";

function CelularFactoryCreatePage() {
  const [celularFactory, setCelularFactory] = useState<ICelularFactory>({
    name: "",
  } as ICelularFactory);

  return (
    <CelularFactoryForm
      celularFactory={celularFactory}
      setCelularFactory={setCelularFactory}
      showForm={true}
    />
  );
}

export default CelularFactoryCreatePage;
