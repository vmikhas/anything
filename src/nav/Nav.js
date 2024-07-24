import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../router/routes/routes";
import { ReactComponent as Logo } from "../assest/images/logo/logo.svg";
import { ReactComponent as Arrow } from "../assest/images/icons/arrow.svg";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

export default function Nav({ mainPage, nowPage, historyPage }) {
	const navigate = useNavigate();
	const location = useLocation();
	const [active, setActive] = useState('');

	useEffect(() => {
		if (location.pathname === routes.main) return setActive('main');
		if (location.pathname === routes.now) return setActive('now');
		if (location.pathname === routes.history) return setActive('history');
	}, [location.pathname]);

	const navLinks = [
		{ name: 'main', page: mainPage, route: routes.main },
		{ name: 'now', page: nowPage, route: routes.now },
		{ name: 'history', page: historyPage, route: routes.history }
	];

	return (
		<section className={"nav"}>
			<a className={"nav__logo"} href={"#1"} onClick={() => navigate(routes.main)}>
				<Logo className={"nav__logo-image"} />
			</a>
			<nav className={"nav__list"}>
				{navLinks.map(({ name, page, route }) => (
					<a className={`nav__link ${active === name ? 'nav__link_active' : ''}`} href={`#${name}`} key={name} onClick={() => navigate(route)}>
						{parse(page)}
					</a>
				))}
			</nav>
			<a className="nav__button-bottom" href={"#1"} aria-label={"Перейти к следующему слайду"}>
				<div className="nav__image"><Arrow /></div>
			</a>
		</section>
	);
}
