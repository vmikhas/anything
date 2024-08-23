import {backgroundImageNow, headerContent, introContent, navContent} from '../../constants/copyright';
import Header from '../../header/Header';
import Intro from '../../intro/Intro';
import Nav from '../../nav/Nav';
import Background from '../../background/Background';

export default function NowPage() {
	return (
		<>
			<Header {...headerContent} />
			<Nav {...navContent} />
			<Intro contents={introContent} />
			<Background background={backgroundImageNow} />
		</>
	);
}