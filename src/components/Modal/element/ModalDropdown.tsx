/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import down from "../../../icons/down.svg";
import { selectAllCategories } from "../../../redux/features/categoriesSlice";
import { useModalGetter, useModalSetter } from "../../../context/modalState";

export const ModalDropdown = ({
}) => {
  const [isActive, setIsActive] = useState(false);
  const options = useSelector(selectAllCategories);
  const handleInput = useModalSetter();
  const modalState = useModalGetter();

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={modalState.category ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option) => option.id === modalState.category)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {              
                handleInput({type: "select", value: option.id || ""})
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
