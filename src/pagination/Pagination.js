import { useState } from "react";

export default function Pagination({ years }) {
	const [active, setActive] = useState('nine');

	console.log(active);

	return (
		<div className={"pagination"}>
			<ul className={"pagination__list"}>
				{years.map((year, id) => <li className={`pagination__item pagination__item_${id} ${year.type === active ? 'pagination__item_active' : ''}`} key={"item-" + id}>
					<a className={"pagination__link"} href={"#1"} onClick={() => setActive(year.type)}>{year.number}</a>
				</li>)}
			</ul>
		</div>
	);
}
