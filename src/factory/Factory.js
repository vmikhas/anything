import parse from 'html-react-parser';
import Picture from '../constants/Picture';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Factory({ text, image }) {

    return (
        <section className={'factory'}>
            <div className={'factory__container'}>
                <h2 className={'visually-hidden'}>История основания фабрики и в последствии бренда LD</h2>
                <TransitionGroup component={null}>
                    <CSSTransition key={'factory__text'} classNames={'factory__text'} timeout={300} appear mountOnEnter unmountOnExit>
                        <div className={'factory__text'}>{parse(text)}</div>
                    </CSSTransition>
                    <CSSTransition key={'factory__image'} classNames={'factory__image'} timeout={300} appear mountOnEnter unmountOnExit>
                        <div className={'factory__image'}>
                            <Picture {...image} />
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </section>
    );
}