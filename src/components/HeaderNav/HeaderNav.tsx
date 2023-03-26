import clsx from 'clsx';
import './HeaderNav.scss';

export const HeaderNav = () => {
  const navItem = ['Home', 'About', `Pages`, 'Shop', 'Projects', 'News'];
  return (
    <div className="header-nav-block">
      <div className="header-burger">
        <button id="burger-menu-btn">
          <span className="burger-menu-icon"></span>
        </button>
      </div>

      <ul className="header-nav">
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
