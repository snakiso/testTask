import {Card} from "./сard/Card.tsx";
import {useAppState} from "../../context/AppContext.tsx";
import './cards.scss'

export const Cards = () => {
    const {cardsForRender} = useAppState()
    return (
        <div className={'cards-container'}>
            {cardsForRender.map(el => {
                return (
                    <Card key={el.id} img={el.image} id={el.id} title={el.name} background={el.bgColor}/>
                )
            })}
        </div>
    );
};

