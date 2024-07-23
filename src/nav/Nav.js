import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes/routes";
import { ReactComponent as Logo } from "../assest/images/logo/logo.svg";
import parse from "html-react-parser";
// import { useState } from "react";

export default function Nav({ mainPage, nowPage, historyPage }) {
	const navigate = useNavigate();
	// const [active, setActive] = useState('main');

	return (
		<section className={"nav"}>
			<a className={"nav__logo"} href={"#1"} onClick={() => navigate(routes.main)}>
				<Logo className={"nav__logo-image"} />
			</a>
			<nav className={"nav__list"}>
				<a className={`nav__link`} href={"#1"} onClick={() => navigate(routes.main)}>{parse(mainPage)}</a>
				<a className={`nav__link`} href={"#2"} onClick={() => navigate(routes.now)}>{parse(nowPage)}</a>
				<a className={`nav__link`} href={"#3"} onClick={() => navigate(routes.history)}>{parse(historyPage)}</a>
			</nav>
		</section>
	);
}

// ${pages.type === active ? 'nav__link_active' : ''}