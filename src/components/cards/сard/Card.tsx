import './card.scss'

type CardProps = {
    img: string
    title: string
    background: string
    id: string
}

export const Card = ({img, title, background, id}: CardProps) => {
    return (
        <a href={id} className={'card'}>
            <div className={'card__img-box'} style={{backgroundColor: background}}>
                <img className={'card__img'} src={img} alt="Картинка не загрузилась"/>
            </div>
            <div>
                <h3 className={'card__title'}>{title}</h3>
            </div>
        </a>
    );
};

