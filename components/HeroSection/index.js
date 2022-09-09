import Image from 'next/image';
import Link from 'next/link';
import s from './scss/hero.module.scss';
import coverImage from '/assets/img/bella-canvas-tee-mockup-of-two-women-wearing-graphic-eye-makeup-m21352-transformed.png';

export default function HeroSection() {
  return (
    <header className={s.header}>
      <div className={`container ${s['container--grid']}`}>
        <article className={`${s.header__heading}`}>
          <div className="wrapper--text">
            <h1 className={s.header__title}>
              Let's find you a fit that is bold and quirky.
            </h1>
          </div>
          <p className="wrapper--text">
            Grab a{' '}
            <Link href="/products/t-shirts">
              <a className={`link link--inline`}>T-shirt</a>
            </Link>{' '}
            or a{' '}
            <Link href="/products/hoodies">
              <a className={`link link--inline`}>Hoddie</a>
            </Link>
          </p>
        </article>

        <div className={`${s.header__cover}`}>
          <Image
            src={coverImage}
            width={1440}
            height={1920}
            objectFit={'contain'}
            objectPosition={'bottom'}
            alt="Models wearing atomella designs"
          />
        </div>
      </div>
    </header>
  );
}
