import {gettingTags} from "../utils/gettingTags.ts";
import {ActionsTypes, StateType} from "./state-reducer-types.ts";

export const initialState: StateType = {
    currentTag: 'Все темы',
    tags: [],
    cards: [],
    cardsForRender: []
};


export function reducer(state: StateType, action: ActionsTypes): StateType {
    switch (action.type) {
        case 'SET_INITIAL_DATA':
            return {
                ...state,
                tags: ['Все темы', ...gettingTags(action.payload.cards)],
                cards: action.payload.cards,
                cardsForRender: action.payload.cards
            };
        case 'CHANGE_FILTER':
            const {tag} = action.payload;
            const filteredCards = tag !== 'Все темы'
                ? state.cards.filter(el => el.tags.includes(tag))
                : state.cards;
            return {
                ...state,
                currentTag: tag,
                cardsForRender: filteredCards,
            };
        default:
            return state;
    }
}