import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import './style.scss';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';

function App() {
	return (
		<div className={'app'} style={{ maxHeight: '1080rem', height: '100%' }}>
			<BrowserRouter>
				{/*<SwitchTransition>*/}
				{/*	<CSSTransition key={'id'} classNames="app" timeout={300} unmountOnExit>*/}
						<Router />
				{/*	</CSSTransition>*/}
				{/*</SwitchTransition>*/}
			</BrowserRouter>
		</div>
	);
}

export default App;
