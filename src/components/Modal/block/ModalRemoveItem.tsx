/* VENDOR */
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { ModalHeader } from "../element/ModalHeader";
import { ModalText } from "../element/ModalText";
import { ModalFooter } from "../element/ModalFooter";
import { tasksRemoved, tasksClearedCategories } from "../../../redux/features/tasksSlice";
import { categoriesRemoved } from "../../../redux/features/categoriesSlice";
import { IListItem } from "../../../types/types";
import { useModalActiv } from "../../../context/modal";

export const ModalRemoveItem: React.FC<IListItem> = ({ item }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const modalActiv = useModalActiv();

  return (
    <>
      <ModalHeader setActive={() => modalActiv(null)} title={"Удаление задачи"} />
      <ModalText text={`Вы уверены, что хотите удалить задачу "${item.name}"?`} />
      <ModalFooter
        setActive={() => modalActiv(null)}
        submitBtnText="Да"
        onSubmit={() => {
          if (isCategories) {
            dispatch(categoriesRemoved(item.id || ""));
            dispatch(tasksClearedCategories(item.id || ""));
          } else {
            dispatch(tasksRemoved(item.id || ""));
          }
          modalActiv(null);
        }
        }
      />
    </>
  );
};
