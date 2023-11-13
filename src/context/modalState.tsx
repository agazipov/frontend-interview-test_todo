import React, {
    useCallback,
    useContext,
    useState,
} from "react";
import { IChildren, IStateModal, ITask } from "../types/types";
import { INITIAL_STATE } from "../constant";

const context = React.createContext<ITask>(INITIAL_STATE);
const setterContext = React.createContext((payload: IStateModal) => { });
const initialContext = React.createContext((payload: ITask) => { });

export const useModalGetter = () => {
    return useContext(context);
};

export const useModalSetter = () => {
    return useContext(setterContext);
};

export const useModalInitial = () => {
    return useContext(initialContext);
};

export const ModalStateContext: React.FC<IChildren> = ({ children }) => {
    const [state, setState] = useState<ITask>(INITIAL_STATE);

    const modalInitial = useCallback((payload: ITask) => {
        setState({ ...payload })
    }, [])

    const modalSetter = useCallback((payload: IStateModal) => {
        switch (payload.type) {
            case "name":
                setState((prev) => ({ ...prev, name: payload.value }));
                break;
            case "select":
                setState((prev) => ({ ...prev, category: payload.value }));
                break;
            case "description":
                setState((prev) => ({ ...prev, description: payload.value }));
                break;
            default:
                break;
        }
    }, []);

    return (
        <context.Provider value={state}>
            <setterContext.Provider value={modalSetter}>
                <initialContext.Provider value={modalInitial}>
                    {children}
                </initialContext.Provider>
            </setterContext.Provider>
        </context.Provider>
    );
};
