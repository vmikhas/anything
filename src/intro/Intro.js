import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import Picture from '../constants/Picture';

export default function Intro({ contents }) {
    const { currentPage } = useSelector((state) => state.content);

    let currentContent = contents[currentPage];

    return (
        <section className={'intro'}>
            <h2 className={`intro__title intro__title_${currentPage}`}>{parse(currentContent.title)}</h2>
            <p className={'intro__text'}>{parse(currentContent.text)}</p>
            {currentContent?.list &&
                currentContent.list.map((item, index) => (
                    item?.image &&
                    <div className={`intro__image intro__image_${currentPage}-${index + 1}`}>
                        <Picture {...item.image} />
                    </div>
                ))
            }
        </section>
    );
}