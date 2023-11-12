import { ModalInput } from "./ModalInput";
import { ModalDropdown } from "./ModalDropdown";

interface ModalRowProps {
  name: string;
  setName: (e:string) => void;
  selected: string  | undefined;
  setSelected: (e:string | undefined) => void;
}

export const ModalRow: React.FC<ModalRowProps> = ({
  name,
  setName,
  selected,
  setSelected,
}) => {
  
  return (
    <div className="modal__content_row">
      <ModalInput name={name} setName={setName} />
      <ModalDropdown selected={selected} setSelected={setSelected} />
    </div>
  );
};
