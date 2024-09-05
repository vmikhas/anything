import { useDispatch, useSelector } from 'react-redux';
import { setSlideIndex } from '../redux/reducers/contentSlice';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

export default function Pagination({ years }) {
    const active = useSelector((state) => state.content.slideIndex);
    const dispatch = useDispatch();

    return (

        <div className={'pagination'}>
            <SwitchTransition>
                <CSSTransition key={'pagination'} classNames={`pagination__list`} timeout={300} appear>
                    <ul className={'pagination__list'}>
                        {years.map((year, id) => (
                            <li className={`pagination__item pagination__item_${active} pagination__item_item-${id}
                                    ${year.type === active ? 'pagination__item_active' : ''}`} key={'item-' + id}>
                                <a className={`pagination__link pagination__link_${active}`} href={'#1'}
                                   onClick={() => dispatch(setSlideIndex(year.type))}>{year.number}</a>
                            </li>
                        ))}
                    </ul>
                </CSSTransition>
            </SwitchTransition>
        </div>

    );
}
