/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import { useModalActiv } from "../../context/modal";

interface ModalProps {
  children: React.ReactNode;
}

export const ModalWrapper: React.FC<ModalProps> = ({
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
