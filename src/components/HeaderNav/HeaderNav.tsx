import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useWindowWidth } from '../../hooks/getWindowWidth';
import './HeaderNav.scss';

export const HeaderNav = () => {
  const navRef = useRef<HTMLUListElement>(null);
  const { windowWidth } = useWindowWidth();
  useEffect(() => {
    if (windowWidth > 1280) {
      navRef.current!.classList.remove('is-hidden');
    } else {
      navRef.current!.classList.add('is-hidden');
    }
  }, [windowWidth]);

  const navItem = ['Home', 'About', `Pages`, 'Shop', 'Projects', 'News'];

  const onBurgerClick = () => {
    navRef.current!.classList.toggle('is-hidden');
  };
  return (
    <div className="header-nav-block">
      <div className="header-burger" onClick={onBurgerClick}>
        <button id="burger-menu-btn">
          <span className="burger-menu-icon"></span>
        </button>
      </div>

      <ul ref={navRef} className="header-nav is-hidden">
        {navItem.map(item => (
          <li
            key={item}
            className={clsx('header-nav__item', {
              'styled-arrow': item === 'Pages',
            })}
          >
            <a href="">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
