import {BrowserRouter} from 'react-router-dom';
import './style.scss';
import {Router} from './router/router';

// import { SwitchTransition, CSSTransition} from "react-transition-group";


function App() {
	
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
