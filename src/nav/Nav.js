import { useNavigate } from "react-router-dom";
import { routes } from "../router/routes/routes";

export default function Nav() {
	const navigate = useNavigate();

	return (
		<div className={"nav__container"}>
			<a className={"nav__logo"} href={"#1"} onClick={() => navigate(routes.main)}>{}</a>
			<nav className={"nav__list"}>
				<a className={"nav__link"} href={"#1"} onClick={() => navigate(routes.main)}>Развитие бренда LD</a>
				<a className={"nav__link"} href={"#2"} onClick={() => navigate(routes.now)}>LD сегодня</a>
				<a className={"nav__link"} href={"#3"} onClick={() => navigate(routes.history)}>История фабрики Liggett Ducat</a>
			</nav>
		</div>
	);
}