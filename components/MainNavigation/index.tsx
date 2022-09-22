import CartToggle from '../Cart/CartToggle';
import Logo from '../Logo';
import MegaMenu from './MegaMenu';
import MenuToggle from './MenuToggle';
import Menu from './NavigationMenu';
import s from './scss/navigation.module.scss';

//TODO: Add menu toggle logic
let isMenuOpen = false;

export default function MainNavigation() {
  return (
    <header className={s.navbar}>
      <div className={`container ${s['container--grid']}`}>
        <div className={`${s.navbar__group} ${s.navbar__logo}`}>
          <Logo />
        </div>
        <div className={`${s.navbar__group} ${s.navbar__toggles}`}>
          <MenuToggle />
          <CartToggle />
        </div>

        <div
          className={`${s.navbar__group} ${s.navbar__menu} ${
            isMenuOpen ? 'slide-in-blurred-top' : 'slide-out-blurred-top'
          }`}>
          <Menu />
        </div>
      </div>
      {/* <MegaMenu /> */}
    </header>
  );
}
