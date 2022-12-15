import { Homepage } from './Homepage'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Homepage />);