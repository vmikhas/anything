export default function Story({ title, subtitle, desc }) {
	return (
		<section className={"story"}>
			<h1 className={"story__title"}>{title}</h1>
			<h2 className={"story__subtitle"}>{subtitle}</h2>
			<p className={"story__desc"}>{desc}</p>
		</section>
	);
}