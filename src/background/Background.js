import {useSelector} from 'react-redux';
import Picture from '../constants/Picture';

export default function Background({ background }) {
	const slideIndex = useSelector((state) => state.content.slideIndex);
	const currentBackground= background[slideIndex];

	if (!currentBackground || !currentBackground.image) {
		return null;
	}

	return (
		<div className={`background background_${slideIndex}`}>
			<Picture {...currentBackground.image} />
		</div>
	);
}