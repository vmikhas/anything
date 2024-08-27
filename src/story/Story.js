import parse from 'html-react-parser';
import Picture from '../constants/Picture';
import Pagination from '../pagination/Pagination';
import { paginationContent } from '../constants/copyright';
import { useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Story({ content }) {
    const slideIndex = useSelector((state) => state.content.slideIndex);
    const currentContent = content[slideIndex];

    return (

        <section className={'story'}>
            <Pagination {...paginationContent} />
            <SwitchTransition>
                <CSSTransition key={slideIndex} classNames={'story__container'} timeout={200} unmountOnExit>
                    <div className={'story__container'}>
                        <h1 className={`story__title story__title_${currentContent.title}`}>{currentContent.title}</h1>
                        <h2 className={`story__subtitle story__subtitle_${currentContent.title}`}>{parse(currentContent.subtitle)}</h2>
                        <p className={`story__desc story__desc_${currentContent.title}`}>{parse(currentContent.desc)}</p>
                        <div className={`story__image story__image_${currentContent.title}`}>
                            <Picture {...currentContent.image} />
                        </div>
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </section>
    );
}
