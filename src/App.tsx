/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./Header/Header";
import { Tasks } from "./Lists/Tasks";
import { Categories } from "./Lists/Categories";
import { ModalEditItem } from "./Modal/ModalEditItem";
import { useIsModal } from "./context/modal";

function App() {
  const isModal = useIsModal();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/categories" element={<Categories />} />
        <Route index element={<Tasks />} />
      </Routes>
      <ModalEditItem
          item={isModal}
        />
    </div>
  );
}

export default App;
