/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import { useModalActiv } from "../../context/modalView";
import { IChildren } from "../../types/types";
import { ModalStateContext } from "../../context/modalState";

export const ModalWrapper: React.FC<IChildren> = ({
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
        <ModalStateContext>
          {children}
        </ModalStateContext>
      </div>
    </>
  );
};
