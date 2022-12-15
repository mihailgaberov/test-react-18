import { Item } from './Item'

export const ItemsGrid = ({items}) => (
    items.map(item => {
        <div><Item item={item} /></div>
    })
);