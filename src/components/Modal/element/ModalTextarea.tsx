import { useModalGetter, useModalSetter } from "../../../context/modalState";

export const ModalTextarea = () => {
  const handleInput = useModalSetter();
  const modalState = useModalGetter();

  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder="Введите описание задачи"
        value={modalState.description}
        onChange={(e) => handleInput({ type: "description", value: e.target.value })}
      />
    </div>
  );
};
