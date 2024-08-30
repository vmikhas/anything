import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import React, { useMemo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';

export default function Background({background}) {
    const {currentPage, slideIndex, activeScreen} = useSelector((state) => state.content);

    const currentBackground = useMemo(() => {
        const prop = activeScreen === 'main' ? slideIndex
            : activeScreen === 'now' ? currentPage : 'history';
        return background[prop];
    }, [background, activeScreen, slideIndex, currentPage]);

    if (!currentBackground || !currentBackground.image) {
        return null;
    }

    return (
        <SwitchTransition>
            <CSSTransition key={slideIndex} classNames={'background'} timeout={200} unmountOnExit>
                <div className={`background background_${slideIndex} background_${activeScreen}`}>

                    <Picture {...currentBackground.image} />

                    {currentBackground?.list &&
                        currentBackground.list.map((item, index) => (
                            <React.Fragment key={index}>
                                {item?.image &&
                                    <div className={`background__item background__item_${slideIndex}-${index + 1}`}>
                                        <Picture {...item.image} />
                                    </div>
                                }

                                {item?.svgSrc &&
                                    <div className={`background__item background__item_${slideIndex}-${index + 1}`}>
                                        <ReactSVG src={item.svgSrc}/>
                                    </div>
                                }
                            </React.Fragment>
                        ))
                    }
                </div>
            </CSSTransition>
        </SwitchTransition>
    );
}
