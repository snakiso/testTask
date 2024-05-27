import {Card} from "./Card.tsx";
import {useAppContext} from "../../context/AppContext.tsx";
import './cards.scss'
export const Cards = () => {
    const {state} = useAppContext()
    return (
        <div className={'card-container'}>
            {state.cardsForRender.map(el => {
                return (
                    <Card key={el.id} img={el.image} id={el.id} title={el.name} background={el.bgColor}/>
                )
            })}
        </div>
    );
};

