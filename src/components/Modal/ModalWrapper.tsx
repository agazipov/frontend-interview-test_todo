/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import { useModalActiv } from "../../context/modal";
import { IModalProps } from "../../types/types";

export const ModalWrapper: React.FC<IModalProps> = ({
  children,
}) => {
  const modalActiv = useModalActiv();

  return (
    <>
      <div
        className="modal"
        onClick={() => modalActiv(null)}
      />
      <div className="modal__content">
        {children}
      </div>
    </>
  );
};
