import { HeadBanner } from '../components/HeadBanner';
import { ItemsGrid } from '../components/ItemsGrid';
import './Home.scss';

export const Home = () => {
    <main className='home'>
        <header>Fashion Toys Header</header>
        <HeadBanner />
        <ItemsGrid />
        <footer>Mickey Fashion Toys Inc.</footer>
    </main>
};