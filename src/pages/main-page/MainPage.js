import Header from "../../header/Header";
import { backgroundImage, headerContent, navContent, storyContent } from "../../constants/copyright";
import Nav from "../../nav/Nav";
import Story from "../../story/Story";
import Background from "../../background/Background";

export default function MainPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
			<Story content={storyContent} />
			<Background background={backgroundImage} />
		</>
	);
}