import Image from 'next/image';
import Link from 'next/link';
import s from './scss/featured.module.scss';
import modelImage from '/assets/img/t-shirt-mockup-of-an-cool-woman-blowing-bubble-gum-21897a.png';
import productImage from '/assets/img/tee-transformed (1).png';

const featured = {
  title: 'Unbowed',
  slug: 'unbowed',
  description:
    "Celebrating the strength, resilience and determination of women across the centuries fighting against injustice and discrimination and championing equality in all it's form.",
  model: {
    title: 'Model wearing unbowed t-shirt',
    cover: {
      url: modelImage,
      alternativeText: 'model wearing atomella design',
    },
  },
  products: [
    {
      title: 'unbowed unisex t-shirt',
      slug: 'unbowed-unisex-t-shirt',
      cover: {
        url: productImage,
        alternativeText: 'product',
      },
    },
    {
      title: 'unbowed unisex t-shirt',
      slug: 'unbowed-unisex-t-shirt',
      cover: {
        url: productImage,
        alternativeText: 'product',
      },
    },
    {
      title: 'unbowed unisex t-shirt',
      slug: 'unbowed-unisex-t-shirt',
      cover: {
        url: productImage,
        alternativeText: 'product',
      },
    },
    {
      title: 'unbowed unisex t-shirt',
      slug: 'unbowed-unisex-t-shirt',
      cover: {
        url: productImage,
        alternativeText: 'product',
      },
    },
  ],
};

export default function FeaturedSection() {
  return (
    <section className={`section ${s['section--featured']}`}>
      <header className={`container ${s.header}`}>
        <div className="wrapper--text">
          <h2 className={s.header__title}>{featured.title}</h2>
          <p className={s.header__description}>{featured.description}</p>
        </div>
        <Link href={`/collection/${featured.slug}`}>
          <a className={`link ${s.header__link}`}>View Collection</a>
        </Link>
      </header>

      <div className="container">
        <article className={s['product-grid']}>
          <Link href={`/collection/${featured.slug}`}>
            <a className={`${s['product-card']} ${s['product-card--large']}`}>
              <Image
                src={featured.model.cover.url}
                alt={featured.model.cover.alternativeText}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <span className="sr-only">{featured.model.title}</span>
            </a>
          </Link>
          {featured.products.map((product, idx) => (
            <Link
              href={`/product/${product.slug}`}
              key={idx}>
              <a className={`${s['product-card']} ${s['product-card--small']}`}>
                <Image
                  alt={product.cover.alternativeText}
                  src={product.cover.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <span className="sr-only">{product.title}</span>
              </a>
            </Link>
          ))}
        </article>
      </div>
    </section>
  );
}
