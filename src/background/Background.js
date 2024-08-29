import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import React, { useMemo } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';

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
                <div className={`background background_${slideIndex} background_${activeScreen}`}>

                        <Picture {...currentBackground.image} />

                        {currentBackground?.list &&
                            currentBackground.list.map((item, index) => {
                                console.log('item.svgSrc', item.svgSrc);
                                return (
                                    <React.Fragment key={index}>
                                        {item?.image &&
                                            <div className={`background__item background__item_${slideIndex}-${index + 1}`}>
                                                <Picture {...item.image} />
                                            </div>
                                        }

                                        {item?.svgSrc &&
                                            <div className={`background__item background__item_${slideIndex}-${index + 1}`}>
                                                <ReactSVG src={item.svgSrc} />
                                            </div>
                                        }
                                    </React.Fragment>
                                    )
                            })
                        }
                    </div>
            </CSSTransition>
        </SwitchTransition>
    );
}


{/*<div className={`background__top-part background__top-part_${slideIndex}`}>*/}
{/*    <Stars className={`background__stars background__stars_${slideIndex}`}/>*/}
{/*</div>*/}


{/*<div className={`background__bottom-part background__bottom-part_${slideIndex}`}></div>*/}
{/*<div className={'background__star2010'}></div>*/}

{/*<div className={`background__thin-stick-part background__thin-stick-part_${slideIndex}`}>*/}
{/*    <ThinStick className={`background__thin-stick background__thin-stick_${slideIndex}`}/>*/}
{/*</div>*/}

{/*<div className={`background__stick-part-1 background__stick-part-1_${slideIndex}`}>*/}
{/*    <Stick className={`background__stick background__stick_1 background__stick_${slideIndex}`}/>*/}
{/*</div>*/}

{/*<div className={`background__stick-part-2 background__stick-part-2_${slideIndex}`}>*/}
{/*    <Stick className={`background__stick background__stick_2 background__stick_${slideIndex}`}/>*/}
{/*</div>*/}

{/*<div className={`background__dots-part background__dots-part_${slideIndex}`}>*/}
{/*    <Dots className={`background__dots background__dots_${slideIndex}`}/>*/}
{/*</div>*/}

{/*<div className={`background__stripes-part background__stripes-part_${slideIndex}`}>*/}
{/*    <Stripes className={`background__stripes background__stripes_${slideIndex}`}/>*/}
{/*</div>*/}
