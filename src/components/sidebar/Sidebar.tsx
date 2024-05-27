import './sidebar.scss'
import {useAppContext} from "../../context/AppContext.tsx";


export const Sidebar = () => {
    const {state, dispatch} = useAppContext()
    const {tags, currentTag} = state

    const changeFilter = (tag: string) => {
        dispatch({type: 'CHANGE_FILTER', payload: {tag: tag}})
    }

    return (
        <aside className={'sidebar'}>
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
        </aside>
    );
};

