import React, {
  ReactNode,
    useCallback,
    useContext,
    useState,
  } from "react";
import { ITask } from "../types/types";
  
  const defaultValue = null;
  
  const context = React.createContext<ITask | null>(defaultValue);
  const setterContext = React.createContext((payload: ITask | null) => {});
  
  export const useIsModal = () => {
    return useContext(context);
  };
  
  export const useModalActiv = () => {
    return useContext(setterContext);
  };
  
  export const ModalContext = ({children}: {children: ReactNode}) => {
    const [isModal, setIsMobile] = useState<ITask | null>(defaultValue);
  
    const modalVisible = useCallback((payload: ITask | null) => {
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
  