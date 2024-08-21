import { backgroundImageMain, headerContent, navContent, storyContent } from "../../constants/copyright";
import Header from "../../header/Header";
import Nav from "../../nav/Nav";
import Story from "../../story/Story";
import Background from "../../background/Background";

export default function MainPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
			<Story content={storyContent} />
			<Background background={backgroundImageMain} />
		</>
	);
}