import parse from 'html-react-parser';
import Picture from '../constants/Picture';
import Pagination from '../pagination/Pagination';
import { paginationContent } from '../constants/copyright';
import { useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';

export default function Story({ content }) {
    const slideIndex = useSelector((state) => state.content.slideIndex);
    const currentContent = content[slideIndex];

    const nodeRef = useRef(null);

    return (

        <section className={'story'}>
            <Pagination {...paginationContent} />
            <SwitchTransition>
                <CSSTransition key={slideIndex} nodeRef={nodeRef} classNames={'story__container'} timeout={300} appear unmountOnExit>
                    <div className={'story__container'} ref={nodeRef}>
                        <h1 className={`story__title story__title_${currentContent.title}`}>{currentContent.title}</h1>
                        <h2 className={`story__subtitle story__subtitle_${currentContent.title}`}>{parse(currentContent.subtitle)}</h2>
                        <div className={`story__desc story__desc_${currentContent.title}`}>{parse(currentContent.desc)}</div>
                        <div className={`story__image story__image_${currentContent.title}`}>
                            {currentContent?.list &&
                                currentContent.list.map((item, index) => (
                                    item?.image &&
                                        <div className={`story__item story__image_${currentContent.title}-${index + 1}`} key={index + 1}>
                                            <Picture {...item.image} />
                                        </div>
                                ))
                            }
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </section>
    );
}
