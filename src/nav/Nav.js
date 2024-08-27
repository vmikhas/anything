import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../router/routes/routes';
import { ReactComponent as Logo } from '../assest/images/logo/logo.svg';
import { ReactComponent as Arrow } from '../assest/images/icons/arrow.svg';
import parse from 'html-react-parser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveScreen, setCurrentPage, setSlideIndex } from '../redux/reducers/contentSlice';
import { storyContent } from '../constants/copyright';

export default function Nav({ mainPage, nowPage, historyPage, clue }) {
    let { slideIndex, activeScreen: active, currentPage } = useSelector((state) => state.content);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === routes.main) return () => dispatch(setActiveScreen('main'));
        if (location.pathname === routes.now) return () => dispatch(setActiveScreen('now'));
        if (location.pathname === routes.history) return () => dispatch(setActiveScreen('history'));
    }, [ location.pathname ]);

    const navLinks = [
        { name: 'main', page: mainPage, route: routes.main },
        { name: 'now', page: nowPage, route: routes.now },
        { name: 'history', page: historyPage, route: routes.history }
    ];

    const toggleHandle = () => {
        let nextSlideIndex = slideIndex - 1;
        const totalSlidesMain = Object.keys(storyContent).length;

        if (location.pathname === routes.main) {
            if ((nextSlideIndex < totalSlidesMain) && (nextSlideIndex === 0)) {
                navigate(routes.now);
                nextSlideIndex = 'start';
            }
        } else if (location.pathname === routes.now) {
            if (currentPage === 'end') {
                dispatch(setCurrentPage('start'));
            }
            if (currentPage === 'start') {
                dispatch(setCurrentPage('end'));
            } else {
                navigate(routes.history);
                nextSlideIndex = 1;
            }
        } else if (location.pathname === routes.history) {
            navigate(routes.main);
            nextSlideIndex = 9;
        }

        dispatch(setSlideIndex(nextSlideIndex));
        dispatch(setActiveScreen(location.pathname === routes.main ? 'main'
            : location.pathname === routes.now ? 'now' : 'history'));
    };

    return (
        <section className={'nav'}>
            <a className={'nav__logo'} href={'/'} onClick={() => navigate(routes.main)}>
                <Logo className={`nav__logo-image nav__logo-image_${slideIndex} nav__logo-image_${active}`}/>
            </a>
            <nav className={`nav__list nav__list_${active} nav__list_${slideIndex} nav__list_${currentPage}`}>
                {navLinks.map(({ name, page, route }) => (
                    <a className={`nav__link nav__link_${slideIndex} nav__link_${active} ${active === name ? 'nav__link_active' : ''}`}
                       href={`#${name}`} key={name} onClick={() => navigate(route)}>
                        {parse(page)}
                    </a>
                ))}
            </nav>
            <button className={`nav__button nav__button_${active} nav__button_${slideIndex} nav__button_${currentPage}`}
                    onClick={toggleHandle}
                    aria-label={'Перейти к следующему слайду'}>
                <p className={`nav__button-text nav__button-text_${active} nav__button-text_${currentPage}`}>{clue[active]}</p>
                <div className={`nav__image nav__image_${active}`}><Arrow/></div>
            </button>
        </section>
    );
}
