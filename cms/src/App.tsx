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
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
