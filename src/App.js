import {BrowserRouter} from 'react-router-dom';
import './style.scss';
import {Router} from './router/router';
import {CSSTransition, SwitchTransition} from 'react-transition-group';


function App() {

	return (
		<div className={'app'} style={{ maxHeight: '1080rem', height: '100%' }}>
			<BrowserRouter>
				<SwitchTransition>
					<CSSTransition className={'app'} key={{key: 'app'}} timeout={300}>
						<Router />
					</CSSTransition>
				</SwitchTransition>
			</BrowserRouter>
		</div>
	);
}

export default App;
