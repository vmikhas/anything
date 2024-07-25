import parse from "html-react-parser";
import Picture from "../constants/Picture";

export default function Intro({ title, image }) {
	return (
		<section className={"intro"}>
			<h2 className={"intro__title"}>{parse(title)}</h2>
			<div className={"intro__image"}>
				<Picture {...image} />
			</div>
		</section>
	);
}