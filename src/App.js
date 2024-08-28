import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/router';
import './style.scss';

// import { CSSTransition, SwitchTransition } from 'react-transition-group';

function App() {

	// const pages = {
	// 	main: <MainPage />,
	// }
	return (
		<div className={'app'}>
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

// style={{ maxHeight: '1080rem', height: '100%' }}