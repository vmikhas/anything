import {useLocation, useNavigate} from 'react-router-dom';
import {routes} from '../router/routes/routes';
import {ReactComponent as Logo} from '../assest/images/logo/logo.svg';
import {ReactComponent as Arrow} from '../assest/images/icons/arrow.svg';
import parse from 'html-react-parser';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveScreen, setSlideIndex} from '../redux/reducers/contentSlice';
import {backgroundImageMain, storyContent} from '../constants/copyright';

export default function Nav({mainPage, nowPage, historyPage, text}) {
    const slideIndex = useSelector((state) => state.content.slideIndex);
    const active = useSelector((state) => state.content.activeScreen);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === routes.main) return () => dispatch(setActiveScreen('main'));
        if (location.pathname === routes.now) return () => dispatch(setActiveScreen('now'));
        if (location.pathname === routes.history) return () => dispatch(setActiveScreen('history'));
    }, [location.pathname]);

    const navLinks = [
        {name: 'main', page: mainPage, route: routes.main},
        {name: 'now', page: nowPage, route: routes.now},
        {name: 'history', page: historyPage, route: routes.history}
    ];

    let toggleHandle = () => {
        const currentIndex = slideIndex;

        const nextIndex = currentIndex === 1 ? Object.keys(storyContent).length : currentIndex - 1;
        dispatch(setSlideIndex(nextIndex));

        const activeScreen = location.pathname === routes.main ? 'main'
            : location.pathname === routes.now ? 'now'
                : 'history';
        dispatch(setActiveScreen(activeScreen));

        const selectedContent = storyContent[nextIndex];
        const selectedBackground = backgroundImageMain[nextIndex];

        return (
            selectedContent,
            selectedBackground
        );
    };


    return (
        <section className={'nav'}>
            <a className={'nav__logo'} href={'/'} onClick={() => navigate(routes.main)}>
                <Logo className={`nav__logo-image nav__logo-image_${slideIndex} nav__logo-image_${active}`}/>
            </a>
            <nav className={`nav__list nav__list_${active} nav__list_${slideIndex}`}>
                {navLinks.map(({name, page, route}) => (
                    <a className={`nav__link nav__link_${slideIndex} nav__link_${active} ${active === name ? 'nav__link_active' : ''}`}
                       href={`#${name}`} key={name} onClick={() => navigate(route)}>
                        {parse(page)}
                    </a>
                ))}
            </nav>
            <button className={`nav__button nav__button_${active} nav__button_${slideIndex}`}
                    onClick={toggleHandle}
                    aria-label={'Перейти к следующему слайду'}>
                <p className={`nav__button-text nav__button-text_${active}`}>{text}</p>
                <div className={'nav__image'}><Arrow/></div>
            </button>
        </section>
    );
}
