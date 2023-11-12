import React, {
  useCallback,
  useContext,
  useState,
} from "react";
import { IContext, IWrapperTask } from "../types/types";

const defaultValue = null;

const context = React.createContext<IWrapperTask | null>(defaultValue);
const setterContext = React.createContext((payload: IWrapperTask | null) => { });

export const useIsModal = () => {
  return useContext(context);
};

export const useModalActiv = () => {
  return useContext(setterContext);
};

export const ModalContext: React.FC<IContext> = ({ children }) => {
  const [isModal, setIsMobile] = useState<IWrapperTask | null>(defaultValue);

  const modalVisible = useCallback((payload: IWrapperTask | null) => {
    setIsMobile(payload);
  }, []);

  return (
    <context.Provider value={isModal}>
      <setterContext.Provider value={modalVisible}>
        {children}
      </setterContext.Provider>
    </context.Provider>
  );
};
