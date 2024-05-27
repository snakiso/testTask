import {useAppDispatch, useAppState} from "../../../context/AppContext.tsx";


export const Menu = () => {
    const {tags, currentTag} = useAppState()
    const dispatch = useAppDispatch()
    const changeFilter = (tag: string) => {
        dispatch({type: 'CHANGE_FILTER', payload: {tag: tag}})
    }
    return (
        <ul className={'sidebar__list'}>
            {tags.map((el, i) => {
                return (
                    <li key={i} className={'sidebar__item'}>
                        <button className={`sidebar__button ${currentTag === el ? "sidebar__button_active" : ""}`}
                                onClick={() => changeFilter(el)}>{el}</button>
                    </li>
                )
            })}
        </ul>
    );
};

