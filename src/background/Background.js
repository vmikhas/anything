import { useSelector } from "react-redux";
import Picture from "../constants/Picture";

export default function Background({ background }) {
	const slideIndex = useSelector((state) => state.content.slideIndex);
	const currentContent = background[slideIndex];

	return (
		<div className={`background background_${slideIndex}`}>
			<Picture {...currentContent.image} />
		</div>
	);
}