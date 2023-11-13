import { ModalBtn } from "./ModalBtn";

interface ModalFooterProps {
  setActive: () => void;
  submitBtnText: string;
  size?: string;
  onSubmit: () => void;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  setActive,
  submitBtnText,
  size,
  onSubmit,
}) => {
  return (
    <div className="modal__content-footer">
      <ModalBtn 
      type="primary" size={size || ""} onClick={onSubmit}>
        {submitBtnText}
      </ModalBtn>
      <ModalBtn
        onClick={setActive}
      >
        Закрыть
      </ModalBtn>
    </div>
  );
};
