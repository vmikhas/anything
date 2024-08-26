import {useSelector} from 'react-redux';
import Picture from '../constants/Picture';
import {useMemo} from 'react';

export default function Background({background}) {
    const {currentPage, slideIndex, activeScreen} = useSelector((state) => state.content);

    const currentBackground = useMemo(() => {
        const prop = activeScreen === 'main' ? slideIndex
            : activeScreen === 'now' ? currentPage : "history";
        return background[prop];
    }, [background, activeScreen, slideIndex, currentPage]);

    if (!currentBackground || !currentBackground.image) {
        return null;
    }

    return (
        <div className={`background background_${slideIndex}`}>
            <Picture {...currentBackground.image} />
        </div>
    );
}
