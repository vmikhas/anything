import parse from "html-react-parser";
import Picture from "../constants/Picture";
import Pagination from "../pagination/Pagination";
import { paginationContent } from "../constants/copyright";
import { useSelector } from "react-redux";

export default function Story({ content }) {
	const slideIndex = useSelector((state) => state.content.slideIndex);
	const currentContent = content[slideIndex];

	return (
		<section className={"story"}>
			<Pagination {...paginationContent} />
			<div className={"story__container"}>
				<div className={"story__wrapper"}>
					<h1 className={`story__title story_title_${currentContent.title}`}>{currentContent.title}</h1>
					<h2 className={`story__subtitle story__subtitle_${currentContent.title}`}>{parse(currentContent.subtitle)}</h2>
					<p className={`story__desc story__desc_${currentContent.title}`}>{parse(currentContent.desc)}</p>
				</div>
				<div className={`story__image story__image_${currentContent.title}`}>
					<Picture {...currentContent.image} />
				</div>
			</div>
		</section>
	);
}
// className={`calculate__carousel-button ${carouselItem.type === active ? 'calculate__carousel-button_active' : ''}
// const titleClassName = classNames('story__title', {
// 	[`story__title_${currentContent.type}`]: currentContent.type,
//   });
//   <p className={classNames("intro__user-desc intro__user-desc_me", {'active': isActive})}>{userDesc} </p>