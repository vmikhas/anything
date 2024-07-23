import parse from "html-react-parser";
import { ReactComponent as Cup } from "../assest/images/icons/cup.svg";

export default function Header({ navigations, name }) {

	return (
		<header className={"header"}>
			<div className={"header__container"}>
				<ul className={"header__site-list"}>
					{navigations.map((navigation, id) => <li className={`header__site-item header__site-item_${id}`} key={"item-" + id}>
						<a className={"header__site-link"} href={"#1"}>{parse(navigation)}</a>
					</li>)}
				</ul>
				<div className={"header__user-list"}>
					<div className={"header__image"}><Cup className={"header__image-icon"} /></div>
					<p className={"header__user-name"}>{parse(name)}</p>
				</div>
			</div>
		</header>
	);
}