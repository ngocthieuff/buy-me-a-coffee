import { TransactionProvider } from '../context/TransactionContext';
import { Navbar, Welcome, Footer, Transactions } from './atoms';

const Explore = () => {

  return (
    <TransactionProvider>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          <Transactions/>
        </div>
        <Footer />
      </div>
    </TransactionProvider>
  );
}

export default Explore;
