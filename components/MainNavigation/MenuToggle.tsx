import { FiMenu } from 'react-icons/fi';
import s from './scss/navigation.module.scss';

function toggleMenu() {
  // logic
}

export default function MenuToggle() {
  return (
    <button
      className={`button button--transparent button--light button--center ${s['button--toggle']}`}>
      <span className="icon">
        <FiMenu />
      </span>
      <span className="sr-only">Menu</span>
    </button>
  );
}
