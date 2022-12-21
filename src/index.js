import { Home } from './pages/Home/Home'
import { createRoot } from 'react-dom/client'

import './reset.scss'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Home />)
