import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import React, { useMemo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';
// import { Parallax } from 'react-parallax';

export default function Background({ background }) {
    const { currentPage, slideIndex, activeScreen } = useSelector((state) => state.content);

    const prop = useMemo(() => {
        return activeScreen === 'main' ? slideIndex
            : activeScreen === 'now' ? currentPage
                : 'history';
    }, [ activeScreen, slideIndex, currentPage ]);

    const currentBackground = useMemo(() => {
        return background[prop];
    }, [ background, prop ]);

    if (!currentBackground || !currentBackground.image) {
        return null;
    }

    return (
        <SwitchTransition>
            <CSSTransition key={slideIndex} classNames={'background'} timeout={200} appear unmountOnExit>
                <div className={`background background_${slideIndex} background_${activeScreen}`}>

                    <Picture {...currentBackground.image} />

                    {currentBackground?.list &&
                        currentBackground.list.map((item, index) => (
                            // <Parallax
                            //     strength={100}
                            //     className={`background__item background__item_${prop || 'end'}-${index + 1}`}
                            // >
                                <React.Fragment key={index}>
                                    <div className={`background__item background__item_${prop || 'end'}-${index + 1}`}>
                                        {item?.image && <Picture {...item.image} />}
                                        {item?.svgSrc && <ReactSVG src={item.svgSrc}/>}
                                    </div>

                                </React.Fragment>
                            // </Parallax>
                        ))
                    }
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}
