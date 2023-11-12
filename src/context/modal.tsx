import React, {
  ReactNode,
    useCallback,
    useContext,
    useState,
  } from "react";
import { ITask } from "../types/types";

interface IWrapperTask {
  type: string,
  item: ITask
}
  
  const defaultValue = null;
  
  const context = React.createContext<IWrapperTask | null>(defaultValue);
  const setterContext = React.createContext((payload: IWrapperTask | null) => {});
  
  export const useIsModal = () => {
    return useContext(context);
  };
  
  export const useModalActiv = () => {
    return useContext(setterContext);
  };
  
  export const ModalContext = ({children}: {children: ReactNode}) => {
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
  