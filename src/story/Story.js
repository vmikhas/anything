import parse from "html-react-parser";
import Picture from "../constants/Picture";
import Pagination from "../pagination/Pagination";
import { paginationContent } from "../constants/copyright";

export default function Story({ one }) {

	return (
		<section className={"story"}>
			<Pagination {...paginationContent} />
			<h1 className={"story__title"}>{one.title}</h1>
			<h2 className={"story__subtitle"}>{parse(one.subtitle)}</h2>
			<p className={"story__desc"}>{parse(one.desc)}</p>
			<div className={"story__image"}>
				<Picture {...one.image} />
			</div>
		</section>
	);
}