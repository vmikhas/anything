import { headerContent, navContent } from "../../constants/copyright";
import Header from "../../header/Header";
import Nav from "../../nav/Nav";

export default function NowPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
		</>
	);
}