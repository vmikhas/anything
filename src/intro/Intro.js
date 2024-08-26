import parse from 'html-react-parser';
import Picture from '../constants/Picture';
import {useSelector} from 'react-redux';

export default function Intro({ contents }) {
	const {slideIndex, currentPage} = useSelector((state) => state.content);

	let currentContent = contents[currentPage];

	return (
		<section className={"intro"}>
			<h2 className={`intro__title intro__title_${currentPage}`}>{parse(currentContent.title)}</h2>
			<p className={"intro__text"}>{parse(currentContent.text)}</p>
			<div className={`intro__image intro__image_${currentPage}`}>
				<Picture {...currentContent.image} />
			</div>
		</section>
	);
}