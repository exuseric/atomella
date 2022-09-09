import Link from 'next/link';
import { FiChevronDown } from 'react-icons/fi';
import s from './scss/navigationMenu.module.scss';

const menuLinks = [
  {
    name: 'products',
    route: '#',
    submenu: true,
    menu: 'products',
  },
  { name: 'home', route: '/', submenu: false },
  { name: 'about', route: '/about', submenu: false },
  { name: 'contact', route: '/contact', submenu: false },
];

function toggleSubmenu() {
  // Logic
}

export default function Menu() {
  return (
    <nav className={s.menu}>
      <ul className={s.menu__links}>
        {menuLinks.map((link) =>
          link.submenu ? (
            // Links with a submenu
            <li
              key={link.route}
              className={`${s.submenu}`}>
              <button
                className={`button button--small button--transparent button--icon ${s.menu__link}`}
                href={link.route}
                data-menu={link.menu}
                onClick={toggleSubmenu}>
                <span className="text">{link.name}</span>
                <span className="icon">
                  <FiChevronDown />
                </span>
              </button>
            </li>
          ) : (
            // Links without a submenu
            <li key={link.route}>
              <Link href={link.route}>
                <a className={`link ${s.menu__link}`}>{link.name}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
