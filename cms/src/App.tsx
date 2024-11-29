import { Route, Routes } from "react-router-dom";
import Header from "./app/components/ui/header";
import SideMenu from "./app/components/ui/side-menu";
import CelularTypeLayout from "./app/cases/celular-types/layout";
import CelularTypeEditPage from "./app/cases/celular-types/edit";
import { ToastContainer } from "react-toastify";
import CelularTypeCreatePage from "./app/cases/celular-types/create";

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
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
