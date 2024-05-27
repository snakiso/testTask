import './sidebar.scss'
import {Menu} from "./menu/Menu.tsx";


export const Sidebar = () => {


    return (
        <aside className={'sidebar'}>
            <Menu/>
        </aside>
    );
};

