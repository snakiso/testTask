import {createContext, Dispatch, ReactNode, useContext, useEffect, useReducer} from "react";
import {kidsTechApi} from "../api/kids-tech.ts";
import {initialState, reducer} from "../reducers/state-reducer.ts";
import {gettingTags} from "../utils/gettingTags.ts";
import {ActionsTypes, StateType} from "../reducers/state-reducer-types.ts";

type AppProviderProps = {
    children: ReactNode
}

const StateContext = createContext<StateType | undefined>(undefined);
const DispatchContext = createContext<Dispatch<ActionsTypes> | undefined>(undefined);
;
export const AppProvider = ({children}: AppProviderProps) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        kidsTechApi.getKidsTech().then(data => {
            const initialData = {
                tags: gettingTags(data.data),
                cards: data.data,
            };
            dispatch({type: 'SET_INITIAL_DATA', payload: initialData});
        });
    }, []);

    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    );
};

export const useAppState = () => {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error('useAppState must be used within a StateContext.Provider');
    }
    return context;
};

export const useAppDispatch = () => {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error('useAppDispatch must be used within a DispatchContext.Provider');
    }
    return context;
};