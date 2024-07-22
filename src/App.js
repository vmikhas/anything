import { BrowserRouter } from "react-router-dom";
import "./style.scss";
import { Router } from "./router/router";


function App() {
	return (
		<div className={"App"}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}

export default App;
