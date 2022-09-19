import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { TransactionContext, TransactionProvider } from '../context/TransactionContext';
import { Navbar, Welcome, Footer, Transactions } from './atoms';

const Explore = () => {
  const context = useContext(TransactionContext);
  const [transactions, setTransactions] = useState(context?.transactions);

  useLayoutEffect(() => setTransactions(context?.transactions), [context?.transactions]);

  return (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
          <Transactions transactions={transactions}/>
        </div>
        <Footer />
      </div>
  );
}

export default Explore;
