import {backgroundImageHistory, factoryContent, headerContent, navContent} from "../../constants/copyright";
import Header from "../../header/Header";
import Nav from "../../nav/Nav";
import Factory from "../../factory/Factory";
import Background from "../../background/Background";

export default function HistoryPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
			<Factory {...factoryContent} />
			<Background background={backgroundImageHistory} />
		</>
	);
}