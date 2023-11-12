/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import "./App.css";
import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Lists/Tasks";
import { Categories } from "./components/Lists/Categories";
import { ModalEditItem } from "./components/Modal/block/ModalEditItem";
import { useIsModal } from "./context/modal";
import { ModalWrapper } from "./components/Modal/ModalWrapper";
import { ModalCreateItem } from "./components/Modal/block/ModalCreateItem";
import { ModalRemoveItem } from "./components/Modal/block/ModalRemoveItem";

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
      {!!isModal &&
        <ModalWrapper >
          {isModal.type === "edit" && <ModalEditItem item={isModal.item} />}
          {isModal.type === "create" && <ModalCreateItem />}
          {isModal.type === "remove" && <ModalRemoveItem  item={isModal.item} />}
        </ModalWrapper>
      }
    </div>
  );
}

export default App;
