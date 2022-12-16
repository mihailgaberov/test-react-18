import { Item } from '../Item/Item'
import './ItemsGrid.scss'

export const ItemsGrid = ({items}) => (
    <ul className="grid">
        {items.map(item => (
            <li key={item.id}><Item item={item} /></li>
        ))}
    </ul>
)
