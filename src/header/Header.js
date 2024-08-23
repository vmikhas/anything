import parse from 'html-react-parser';
import {ReactComponent as Cup} from '../assest/images/icons/cup.svg';
import {useState} from 'react';
import classNames from 'classnames';

export default function Header({navigations, user}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <button className={classNames(`header__toggle`, {header__toggle_open: isOpen})}
                        aria-label="Открыть меню"
                        onClick={() => setIsOpen(!isOpen)}><span></span>
                </button>
                <ul className={classNames(`header__sitelist`, {header__sitelist_open: isOpen})}>
                    {navigations.map((navigation, id) => <li className={`header__site-item header__site-item_${id}`}
                                                             key={'item-' + id}>
                        <a className={'header__site-link'} href={navigation.link}>{parse(navigation.name)}</a>
                    </li>)}
                </ul>
                <div className={'header__user-list'}>
                    <div className={'header__image'}><Cup className={'header__image-icon'}/></div>
                    <p className={'header__user-name'}>{parse(user)}</p>
                </div>
            </div>
        </header>
    );
}