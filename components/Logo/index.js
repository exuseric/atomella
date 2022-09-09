import Link from 'next/link';
import Atomella from './logo-icon';
import s from './scss/Logo.module.scss';

export default function Logo() {
  return (
    <Link href="/">
      <a className={`link link--icon link--small ${s.logo}`}>
        <span className="icon">
          <Atomella />
        </span>
        <span className="text">atomella</span>
      </a>
    </Link>
  );
}
