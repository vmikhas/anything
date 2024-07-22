export default function Header({ navigations }) {
	return (
		<header className={"header"}>
			<div className={"header__container"}>
				<nav className={"header__nav"}>
					<ul className={"header__list"}>
						{navigations.map((navigation, id) => <li className={`header__item header__item_${id}`} key={"item-" + id}>
							<a className={"header__link"} href={"#1"}>{navigation}</a>
						</li>)}
					</ul>
				</nav>
			</div>
		</header>
	);
}