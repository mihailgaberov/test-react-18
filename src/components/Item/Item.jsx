import './Item.scss'

export const Item = ({item}) => {
    const src = require(`../../assets/images/${item.imgName}`);
    return (
        <article className='item'>
            <h3>{item.name}</h3>
            <figure>
                <img src={src} alt={item.name}/>
                <figcaption>
                    <span>{item.price}</span>
                    <button>BUY</button>
                    <button>♡</button>
                </figcaption>
            </figure>
        </article>
    );
}
