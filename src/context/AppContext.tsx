import {createContext, Dispatch, ReactNode, useContext, useEffect, useReducer} from "react";
import {kidsTechApi} from "../api/kids-tech.ts";
import {initialState, reducer} from "../reducers/state-reducer.ts";
import {gettingTags} from "../utils/gettingTags.ts";
import {ActionsTypes, StateType} from "../reducers/state-reducer-types.ts";

type AppProviderProps = {
    children: ReactNode
}
type AppContextType = {
    state: StateType;
    dispatch: Dispatch<ActionsTypes>;
};
const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider = ({ children }: AppProviderProps) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        kidsTechApi.getKidsTech().then(data => {
            const initialData = {
                tags: gettingTags(data.data),
                cards: data.data,
            };
            dispatch({ type: 'SET_INITIAL_DATA', payload: initialData });
        });
    }, []);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};