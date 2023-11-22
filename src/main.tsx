import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; //browserrouter is going to control routing for the entire application
import App from './App';
//starting point / root component
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>
)