import Header from "../../header/Header";
import Pagination from "../../pagination/Pagination";
import { headerContent, navContent, paginationContent, storyContent } from "../../constants/copyright";
import Nav from "../../nav/Nav";
import Story from "../../story/Story";

export default function MainPage() {
	return (
		<>
			<Header {...headerContent} />
			<Pagination {...paginationContent} />
			<Nav {...navContent} />
			<Story {...storyContent} />
		</>
	);
}