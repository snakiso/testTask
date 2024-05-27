import './styles/app.scss'
import {AppProvider} from "./context/AppContext.tsx";
import {CardsPage} from "./pages/CardsPage.tsx";

export function App() {

    return (
        <AppProvider>
            <CardsPage/>
        </AppProvider>
    )
}


