import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Intro({ contents }) {
    const { currentPage } = useSelector((state) => state.content);
    let currentContent = contents[currentPage];

    return (
        <section className={'intro'}>
            <TransitionGroup component={null}>
                <CSSTransition key={`title-${currentPage}`} classNames={'intro__title'} timeout={300} appear>
                    <h2 className={`intro__title intro__title_${currentPage}`}>{parse(currentContent.title)}</h2>
                </CSSTransition>

                <CSSTransition key={`text-${currentPage}`} classNames={'intro__text'} timeout={10000} appear>
                    <div className={'intro__text'}>{parse(currentContent.text)}</div>
                </CSSTransition>

                {currentContent?.list && currentContent.list.map((item, index) => (
                    item?.image && (
                        <CSSTransition key={`image-${index}-${currentContent}`} classNames={'intro__image'} timeout={300} appear>
                            <div className={`intro__image intro__image_${currentPage}-${index + 1}`}>
                                <Picture {...item.image} />
                            </div>
                        </CSSTransition>
                    )
                ))}
            </TransitionGroup>
        </section>
    );
}
