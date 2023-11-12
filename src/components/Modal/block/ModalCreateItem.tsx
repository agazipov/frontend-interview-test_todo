/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { ModalHeader } from "../element/ModalHeader";
import { ModalInput } from "../element/ModalInput";
import { ModalRow } from "../element/ModalRow";
import { ModalTextarea } from "../element/ModalTextarea";
import { ModalFooter } from "../element/ModalFooter";
import { tasksAdded } from "../../../redux/features/tasksSlice";
import { categoriesAdded } from "../../../redux/features/categoriesSlice";
import { useModalActiv } from "../../../context/modal";
import { ITask } from "../../../types/types";

export const ModalCreateItem = () => {
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

  return (
    <>
      <ModalHeader
        setActive={() => modalActiv(null)}
        title={
          isCategories ? "Создание категории" : "Создание задачи"
        }
      />
      {isCategories ? (
        <ModalInput
          name={inputFields.name}
          setName={(e) => setInputFields((prev) => ({ ...prev, name: e }))}
          size="large"
        />
      ) : (
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
        submitBtnText="Создать"
        size="large"
        onSubmit={() => {
          if (!inputFields.name) return;
          if (isCategories) {
            dispatch(categoriesAdded({ name: inputFields.name, description: inputFields.description }))
          } else {
            dispatch(tasksAdded({
              name: inputFields.name,
              description: inputFields.description,
              category: inputFields.category,
            }))
          };
          modalActiv(null);
        }
        }
      />
    </>
  );
};
