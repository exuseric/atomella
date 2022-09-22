import FeaturedSection from '../components/FeaturedSection';
import HeroSection from '../components/HeroSection';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import ProductSection from '../components/ProductSection';

export default function Home() {
  return (
    <DefaultLayout>
      <main className="home">
        <HeroSection />
        <FeaturedSection />
        <ProductSection />
      </main>
    </DefaultLayout>
  );
}
