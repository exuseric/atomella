import Image from 'next/image';
import Link from 'next/link';
import s from './scss/hero.module.scss';
import coverImage from '/assets/img/bella-canvas-tee-mockup-of-two-women-wearing-graphic-eye-makeup-m21352-transformed.png';

const hero = {
  title: "Let's find you a fit that is bold and quirky.",
  description: 'Grab a t-shirt or a hoodie',
  cover: {
    url: coverImage,
    alternativeText: 'Model wearing unbowed atomella design',
  },
};

export default function HeroSection() {
  return (
    <header className={s.header}>
      <div className={`container ${s['container--grid']}`}>
        <article className={`${s.header__heading}`}>
          <div className="wrapper--text">
            <h1 className={s.header__title}>{hero.title}</h1>
          </div>
          <p className="wrapper--text">
            <Link href="/products/t-shirts">
              <a
                className={`button button--main`}
                role="button">
                {hero.description}
              </a>
            </Link>
          </p>
        </article>

        <div className={`${s.header__cover}`}>
          <Image
            src={hero.cover.url}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            alt={hero.cover.alternativeText}
            priority
          />
        </div>
      </div>
    </header>
  );
}
