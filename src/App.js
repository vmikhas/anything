import {BrowserRouter} from 'react-router-dom';
import './style.scss';
import {Router} from './router/router';
// import {useSelector} from 'react-redux';

// import { SwitchTransition, CSSTransition} from "react-transition-group";


function App() {

	// const {currentPage, slideIndex, activeScreen} = useSelector((state) => state.content);

	// console.log('currentPage', currentPage);
	// console.log('slideIndex', slideIndex);
	// console.log('activeScreen', activeScreen);
	// console.log('______________________');

	return (
		<div className={"App"} style={{ maxHeight: '1080rem', height: '100%' }}>
			<BrowserRouter>
				{/* <SwitchTransition>
					<CSSTransition > */}
						<Router />
					{/* </CSSTransition>
				</SwitchTransition> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
