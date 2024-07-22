import Header from "../../header/Header";
import { headerContent } from "../../constants/copyright";
import Nav from "../../nav/Nav";

export default function MainPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav />
		</>
	);
}