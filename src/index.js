import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

reportWebVitals();
