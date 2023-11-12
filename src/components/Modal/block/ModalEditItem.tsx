/* VENDOR */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { ModalHeader } from "../element/ModalHeader";
import { ModalRow } from "../element/ModalRow";
import { ModalInput } from "../element/ModalInput";
import { ModalTextarea } from "../element/ModalTextarea";
import { ModalFooter } from "../element/ModalFooter";
import { tasksUpdated } from "../../../redux/features/tasksSlice";
import { categoriesUpdated } from "../../../redux/features/categoriesSlice";
import { ITask } from "../../../types/types";
import { useModalActiv } from "../../../context/modal";

export const ModalEditItem = ({ item }: { item: ITask}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const [inputFields, setInputFields] = useState<ITask>({
    id: "",
    name: "",
    category: "",
    description: "",
  })

  const modalActiv = useModalActiv();

  useEffect(() => {
    if (item) {
      setInputFields((prev) => ({ ...prev, name: item.name, description: item.description, category: item.category }))
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
        <ModalInput
          name={inputFields.name}
          setName={(e) => setInputFields((prev) => ({ ...prev, name: e }))}
          size="large"
        />) : (
        <ModalRow
          name={inputFields.name}
          setName={(e) => setInputFields((prev) => ({ ...prev, name: e }))}
          selected={inputFields.category}
          setSelected={(e) => setInputFields((prev) => ({ ...prev, category: e }))}
        />
      )}
      <ModalTextarea
        description={inputFields.description}
        setDescription={(e) => setInputFields((prev) => ({ ...prev, description: e }))}
      />
      <ModalFooter
        setActive={() => modalActiv(null)}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          if (!inputFields.name) return;
          if (isCategories) {
            dispatch(categoriesUpdated({ id: item.id, name: inputFields.name, description: inputFields.description }))
          } else {
            dispatch(tasksUpdated({
              id: item.id,
              name: inputFields.name,
              description: inputFields.description,
              category: inputFields.category,
            }))
          }
          modalActiv(null);
        }}
      />
    </>
  );
};
