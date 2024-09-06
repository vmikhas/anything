import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import './style.scss';

function App() {

    // const pages = {
    // 	main: <MainPage />,
    // }
    return (
        <div className={'app'}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </div>
    );
}

export default App;
