import MainNavigation from '../MainNavigation';

const DefaultLayout = ({ children }) => {
  return (
    <section className="default-layout">
      <MainNavigation />
      {children}
    </section>
  );
};

export default DefaultLayout;
