/* VENDOR */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

/* APPLICATION */
import { ModalHeader } from "../element/ModalHeader";
import { ModalRow } from "../element/ModalRow";
import { ModalInput } from "../element/ModalInput";
import { ModalTextarea } from "../element/ModalTextarea";
import { ModalFooter } from "../element/ModalFooter";
import { tasksUpdated } from "../../../redux/features/tasksSlice";
import { categoriesUpdated } from "../../../redux/features/categoriesSlice";
import { IListItem } from "../../../types/types";
import { useModalActiv } from "../../../context/modalView";
import { useModalGetter, useModalInitial } from "../../../context/modalState";
import { usePathFind } from "../../../hooks/usePathFind";

export const ModalEditItem: React.FC<IListItem> = ({ item }) => {
  const dispatch = useDispatch();
  
  const isCategories = usePathFind();

  const modalActiv = useModalActiv();
  const modalState = useModalGetter();
  const handleInput = useModalInitial(); 

  useEffect(() => {
    if (item) {
      handleInput(item)
    }
  }, [item])

  return (
    <>
      <ModalHeader
        setActive={() => modalActiv(null)}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput size="large" />) : (
        <ModalRow />
      )}
      <ModalTextarea />
      <ModalFooter
        setActive={() => modalActiv(null)}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          if (!modalState.name) return;
          if (isCategories) {
            dispatch(categoriesUpdated({ id: item.id, name: modalState.name, description: modalState.description }))
          } else {
            dispatch(tasksUpdated({
              id: item.id,
              name: modalState.name,
              description: modalState.description,
              category: modalState.category,
            }))
          }
          modalActiv(null);
        }}
      />
    </>
  );
};
