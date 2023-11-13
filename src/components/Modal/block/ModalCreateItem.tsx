/* VENDOR */
import { useDispatch } from "react-redux";

/* APPLICATION */
import { ModalHeader } from "../element/ModalHeader";
import { ModalInput } from "../element/ModalInput";
import { ModalRow } from "../element/ModalRow";
import { ModalTextarea } from "../element/ModalTextarea";
import { ModalFooter } from "../element/ModalFooter";
import { tasksAdded } from "../../../redux/features/tasksSlice";
import { categoriesAdded } from "../../../redux/features/categoriesSlice";
import { useModalActiv } from "../../../context/modalView";
import { useModalGetter } from "../../../context/modalState";
import { usePathFind } from "../../../hooks/usePathFind";

export const ModalCreateItem = () => {
  const dispatch = useDispatch();

  const isCategories = usePathFind();

  const modalActiv = useModalActiv();
  const modalState = useModalGetter();

  return (
    <>
      <ModalHeader
        setActive={() => modalActiv(null)}
        title={
          isCategories ? "Создание категории" : "Создание задачи"
        }
      />
      {isCategories ? (
        <ModalInput size="large" />
      ) : (
        <ModalRow />
      )}
      <ModalTextarea />
      <ModalFooter
        setActive={() => modalActiv(null)}
        submitBtnText="Создать"
        size="large"
        onSubmit={() => {
          if (!modalState.name) return;
          if (isCategories) {
            dispatch(categoriesAdded({ name: modalState.name, description: modalState.description }))
          } else {
            dispatch(tasksAdded({
              name: modalState.name,
              description: modalState.description,
              category: modalState.category,
            }))
          };
          modalActiv(null);
        }
        }
      />
    </>
  );
};
