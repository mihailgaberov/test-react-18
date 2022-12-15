import { Item } from './Item'
import './ItemsGrid.scss'
export const ItemsGrid = ({items}) => {

    return (
        <ul className="grid">
            {items.map(item => (
                <li className='item'><Item item={item} /></li>
            ))}
        </ul>
    );
};
