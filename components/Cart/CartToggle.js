import { FiShoppingCart } from 'react-icons/fi';
import s from './scss/cart.module.scss';

function toggleCart() {
  // logic
}

export default function CartToggle() {
  return (
    <button
      className={`button button--transparent button--center ${
        s[('toggle', 'toggle--open')]
      }`}
      onClick={toggleCart}>
      <span className="icon">
        <FiShoppingCart />
      </span>
      <span className="sr-only">Cart</span>
      <span className={s['count']}>
        <span>6</span>
      </span>
    </button>
  );
}
