import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = ({ menus }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {menus.map((menu, idx) => {
          return (
            <NavLink
              key={idx}
              className={({ isActive }) =>
                `${styles.link}
                 ${isActive ? styles.active : ''}`
              }
              to={menu.path}
            >
              {menu.name}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
