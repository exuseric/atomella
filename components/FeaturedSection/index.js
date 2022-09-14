import Image from 'next/image';
import Link from 'next/link';
import s from './scss/featured.module.scss';
import modelImage from '/assets/img/t-shirt-mockup-of-an-cool-woman-blowing-bubble-gum-21897a.png';
import productImage from '/assets/img/tee-transformed (1).png';

const featured = {
  title: 'Unbowed',
  description:
    "Celebrating the strength, resilience and determination of women across the centuries fighting against injustice and discrimination and championing equality in all it's form.",
  callToAction: {
    title: 'View products',
    link: '/products/collection?collection=unbowed',
  },
  modelImage: {
    title: 'model image',
    slug: '/products/collection?collection=unbowed',
    url: modelImage,
    alternativeText: 'model wearing atomella design',
  },
  productImage: [
    {
      title: 'product',
      slug: 'products/collection/?collection=unbowed&type=t-shirt',
      url: productImage,
      alternativeText: 'product',
    },
    {
      title: 'product',
      slug: 'products/collection/?collection=unbowed&type=t-shirt',
      url: productImage,
      alternativeText: 'product',
    },
    {
      title: 'product',
      slug: 'products/collection/?collection=unbowed&type=t-shirt',
      url: productImage,
      alternativeText: 'product',
    },
    {
      title: 'product',
      slug: 'products/collection/?collection=unbowed&type=t-shirt',
      url: productImage,
      alternativeText: 'product',
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
        <Link href={featured.callToAction.link}>
          <a className={`link ${s.header__link}`}>
            {featured.callToAction.title}
          </a>
        </Link>
      </header>

      <div className="container">
        <article className={s['product-grid']}>
          <Link href={featured.modelImage.slug}>
            <a className={`${s['product-card']} ${s['product-card--large']}`}>
              <Image
                alt="model"
                src={featured.modelImage.url}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <span className="sr-only">{featured.modelImage.title}</span>
            </a>
          </Link>
          {featured.productImage.map((img, idx) => (
            <Link
              href={img.slug}
              key={idx}>
              <a className={`${s['product-card']} ${s['product-card--small']}`}>
                <Image
                  alt={img.alternativeText}
                  src={img.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
                <span className="sr-only">{img.title}</span>
              </a>
            </Link>
          ))}
          <div className={s['product-grid--secondary']}></div>
        </article>
      </div>
    </section>
  );
}
