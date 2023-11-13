import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";

export const ModalRow= () => {
  
  return (
    <div className="modal__content_row">
      <ModalInput />
      <ModalDropdown />
    </div>
  );
};
