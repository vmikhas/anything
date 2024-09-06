import parse from 'html-react-parser';
import Picture from '../constants/Picture';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useRef } from 'react';

export default function Factory({ text, image }) {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    return (
        <section className={'factory'}>
            <div className={'factory__container'}>
                <h2 className={'visually-hidden'}>История основания фабрики и в последствии бренда LD</h2>
                <TransitionGroup component={null}>
                    <CSSTransition key={'factory__text'} nodeRef={textRef} classNames={'factory__text'} timeout={300} appear mountOnEnter unmountOnExit>
                        <div className={'factory__text'} ref={textRef}>{parse(text)}</div>
                    </CSSTransition>
                    <CSSTransition key={'factory__image'} nodeRef={imageRef} classNames={'factory__image'} timeout={300} appear mountOnEnter unmountOnExit>
                        <div className={'factory__image'} ref={imageRef}>
                            <Picture {...image} />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </section>
    );
}