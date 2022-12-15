import { HeadBanner } from '../components/HeadBanner';
import { ItemsGrid } from '../components/ItemsGrid';
import './Home.scss';

export const Home = () => (
    <main className='home'>
        <header>Fashion Toys Header</header>
        <HeadBanner />
        <ItemsGrid items={['toy1', 'toy2', 'toy3', 'toy4', 'toy5', 'toy6']} />
        <footer>Mickey Fashion Toys Inc.</footer>
    </main>
);