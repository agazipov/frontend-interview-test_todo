import close from "../../../icons/close.svg";

interface ModalHeaderProps {
  clearState?(): void;
  setActive: () => void;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  setActive,
}) => {
  return (
    <div className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button
        className="modal__content-header__btn"
        onClick={setActive}
      >
        <img src={close} alt="close" />
      </button>
    </div>
  );
};
