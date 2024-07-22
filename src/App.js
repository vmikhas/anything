import { headerContent } from "./constants/copyright";
import Header from "./header/Header";
import "./style.scss";

function App() {
	return (
		<div className={"App"}>
			<Header {...headerContent} />
		</div>
	);
}

export default App;
