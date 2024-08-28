import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import { useMemo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactComponent as Stars } from '../assest/images/bg_icons/stars.svg';
import { ReactComponent as Stick } from '../assest/images/bg_icons/stick.svg';
// import { ReactComponent as Stick2 } from '../assest/images/bg_icons/stick_2.svg';
import { ReactComponent as ThinStick } from '../assest/images/bg_icons/thin_stick.svg';

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
                    <div className={`background__top-part background__top-part_${slideIndex}`}>
                        <Stars className={`background__stars background__stars_${slideIndex}`}/>
                    </div>

                    <Picture {...currentBackground.image} />

                    <div className={`background__bottom-part background__bottom-part_${slideIndex}`}></div>

                    <div className={`background__thin-stick-part background__thin-stick-part_${slideIndex}`}>
                        <ThinStick className={`background__thin-stick background__thin-stick_${slideIndex}`}/>
                    </div>

                    <div className={`background__stick-part-1 background__stick-part-1_${slideIndex}`}>
                        <Stick className={`background__stick background__stick_1 background__stick_${slideIndex}`}/>
                    </div>

                    <div className={`background__stick-part-2 background__stick-part-2_${slideIndex}`}>
                        <Stick className={`background__stick background__stick_2 background__stick_${slideIndex}`}/>
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}
