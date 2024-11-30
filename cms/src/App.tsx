import { Route, Routes } from "react-router-dom";
import Header from "./app/components/ui/header";
import SideMenu from "./app/components/ui/side-menu";
import CelularTypeLayout from "./app/cases/celular-types/layout";
import CelularTypeEditPage from "./app/cases/celular-types/edit";
import { ToastContainer } from "react-toastify";
import CelularTypeCreatePage from "./app/cases/celular-types/create";
import CelularFactoryLayout from "./app/cases/celular-factories/layout";
import CelularFactoryCreatePage from "./app/cases/celular-factories/create";
import CelularFactoryEditPage from "./app/cases/celular-factories/edit";
import CelularModelLayout from "./app/cases/celular-models/layout";
import CelularModelCreatePage from "./app/cases/celular-models/create";
import CelularModelEditPage from "./app/cases/celular-models/edit";
import CelularCreatePage from "./app/cases/celular/create";
import CelularEditPage from "./app/cases/celular/edit";
import CelularLayout from "./app/cases/celular/layout";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <SideMenu />
        <Routes>
          <Route path="/celular-types" element={<CelularTypeLayout />}>
            <Route path="new" element={<CelularTypeCreatePage />} />
            <Route path=":id" element={<CelularTypeEditPage />} />
          </Route>
          <Route path="/celular-factories" element={<CelularFactoryLayout />}>
            <Route path="new" element={<CelularFactoryCreatePage />} />
            <Route path=":id" element={<CelularFactoryEditPage />} />
          </Route>
          <Route path="/celular-models" element={<CelularModelLayout />}>
            <Route path="new" element={<CelularModelCreatePage />} />
            <Route path=":id" element={<CelularModelEditPage />} />
          </Route>
          <Route path="/celulares" element={<CelularLayout />}>
            <Route path="new" element={<CelularCreatePage />} />
            <Route path=":id" element={<CelularEditPage />} />
          </Route>
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
