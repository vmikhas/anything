import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import { useMemo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Background({ background }) {
    const { currentPage, slideIndex, activeScreen } = useSelector((state) => state.content);

    const currentBackground = useMemo(() => {
        const prop = activeScreen === 'main' ? slideIndex
            : activeScreen === 'now' ? currentPage : 'history';
        return background[prop];
    }, [ background, activeScreen, slideIndex, currentPage ]);

    if (!currentBackground || !currentBackground.image) {
        return null;
    }

    return (
        <SwitchTransition>
            <CSSTransition key={slideIndex} classNames={'background'} timeout={200} unmountOnExit>
                <div className={`background background_${slideIndex}`}>
                    <Picture {...currentBackground.image} />
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}
