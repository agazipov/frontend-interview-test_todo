import { useModalGetter, useModalSetter } from "../../../context/modalState";
import important from "../../../icons/important.svg";

interface ModalInputProps {
  size?: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({
  size,
}) => {
  const handleInput = useModalSetter();
  const modalState = useModalGetter();

  return (
    <div
      className={
        size === "large" ? "modalinput-wrapper large" : "modalinput-wrapper"
      }
    >
      <input
        id="modalinput"
        className="modalinput"
        placeholder="Введите имя задачи/категории"
        value={modalState.name}
        onChange={(e) => handleInput({ type: "name", value: e.target.value })}
      />
      <img src={important} alt="important" className="modalinput-icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
