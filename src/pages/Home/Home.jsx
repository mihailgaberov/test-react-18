import { HeadBanner } from '../../components/HeadBanner/HeadBanner';
import { ItemsGrid } from '../../components/ItemsGrid/ItemsGrid';
import './Home.scss';
import {v4 as uuidv4} from "uuid";


export const Home = () => (
    <main className='home'>
        <header>Fashion Toys Header</header>
        <HeadBanner />
        <ItemsGrid items={[
            {
                name: "Toy 1",
                id: uuidv4(),
                price: '$1',
                imgName: 'toy1.png'
            },
            {
                name: "Toy 2",
                id: uuidv4(),
                price: '$10',
                imgName: 'toy2.jpeg'
            },
            {
                name: "Toy 3",
                id: uuidv4(),
                price: '$6',
                imgName: 'toy3.jpeg'
            },
            {
                name: "Toy 4",
                id: uuidv4(),
                price: '$4',
                imgName: 'toy4.jpeg'
            },
            {
                name: "Toy 5",
                id: uuidv4(),
                price: '$2',
                imgName: 'toy5.png'
            },
            {
                name: "Toy 6",
                id: uuidv4(),
                price: '$12',
                imgName: 'toy6.png'
            }
        ]} />
        <footer>Mickey Fashion Toys Inc.</footer>
    </main>
);
