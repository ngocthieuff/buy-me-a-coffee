import { Navbar, Welcome, Footer, Transactions } from './atoms';

const Explore = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
