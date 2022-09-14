import HeroSection from '../components/HeroSection';
import DefaultLayout from '../components/Layouts/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <main className="home">
        <HeroSection />
      </main>
    </DefaultLayout>
  );
}
