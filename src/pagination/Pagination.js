import { useDispatch, useSelector } from "react-redux";
import { setSlideIndex } from "../redux/reducers/contentSlice";

export default function Pagination({ years }) {
	const dispatch = useDispatch();
	const active = useSelector((state) => state.content.slideIndex);

	console.log(active);

	return (
		<div className={"pagination"}>
			<ul className={"pagination__list"}>
				{years.map((year, id) => <li className={`pagination__item pagination__item_${id} ${year.type === active ? 'pagination__item_active' : ''}`} key={"item-" + id}>
					<a className={`pagination__link pagination__link_${active}`} href={"#1"} onClick={() => dispatch(setSlideIndex(year.type))}>{year.number}</a>
				</li>)}
			</ul>
		</div>
	);
}
