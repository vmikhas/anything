import Header from "../../header/Header";
import { headerContent, navContent, storyContent } from "../../constants/copyright";
import Nav from "../../nav/Nav";
import Story from "../../story/Story";

export default function MainPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
			<Story {...storyContent} />
		</>
	);
}