import {KidTechType} from "../api/api-types.ts";

export  type StateType = {
    currentTag: string,
    tags: string[],
    cards: KidTechType,
    cardsForRender: KidTechType
}

type ChangeFilterAC = {
    type: 'CHANGE_FILTER'
    payload: { tag: string; }
}

type SetDataAC = {
    type: 'SET_INITIAL_DATA'
    payload: { cards: KidTechType }
}

export  type ActionsTypes = ChangeFilterAC | SetDataAC