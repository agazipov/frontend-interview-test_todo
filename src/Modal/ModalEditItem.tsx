/* VENDOR */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalHeader";
import { ModalRow } from "./ModalRow";
import { ModalInput } from "./ModalInput";
import { ModalTextarea } from "./ModalTextarea";
import { ModalFooter } from "./ModalFooter";
import { tasksUpdated } from "../features/tasksSlice";
import { categoriesUpdated } from "../features/categoriesSlice";
import { ITask } from "../types/types";
import close from "../icons/close.svg";
import important from "../icons/important.svg";
import { ModalDropdown } from "./ModalDropdown";
import { useModalActiv } from "../context/modal";

interface ModalEditItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem = ({ item }: { item: ITask | null }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const [name, setName] = useState<string>('');
  const [selected, setSelected] = useState(item?.category || "");
  const [description, setDescription] = useState('');
  const setActive = () => true;
  console.log(item && item.name);
  const modalActiv = useModalActiv();

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item])


  return (
    <Modal active={!!item} setActive={setActive}>
      <div className="modal__content-header">
        <h4 className="modal__content-title">{isCategories ? "Редактирование категории" : "Редактирование задачи"}</h4>
        <button
          className="modal__content-header__btn"
          onClick={() => { }}
        >
          <img src={close} alt="close" />
        </button>
      </div>
      {isCategories ? (
        <div
          className={
            "modalinput-wrapper large"
          }
        >
          <input
            id="modalinput"
            className="modalinput"
            placeholder="Введите имя задачи/категории"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <img src={important} alt="important" className="modalinput-icon" />
          <label htmlFor="modalinput">Имя</label>
        </div>
      ) : (
        <div className="modal__content_row">
          <ModalInput name={name} setName={setName} />
          <ModalDropdown selected={selected} setSelected={setSelected} />
        </div>
      )}
      <div className="modaltextarea-wrapper">
        <label htmlFor="modaltextarea">Описание</label>
        <textarea
          id="modaltextarea"
          className="modaltextarea"
          placeholder="Введите описание задачи"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          dispatch(
            isCategories
              ? categoriesUpdated({ id: item?.id, name, description })
              : tasksUpdated({
                id: item?.id,
                name,
                description,
                category: selected,
              })
          );
          modalActiv(null);
        }}
      />
    </Modal>
  );
};
