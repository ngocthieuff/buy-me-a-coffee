import App from './App'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { render } from "react-dom";
import { Welcome } from './components';
import Explore from './components/Explore';
import { BuyCoffee } from './components/BuyCoffee';
import { TransactionProvider } from './context/TransactionContext';

const rootElement = document.getElementById("root");
render(
  <TransactionProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="explore" element={<Explore />} />
      <Route path="buy-coffee" element={<BuyCoffee />} />
    </Routes>
  </BrowserRouter>
  </TransactionProvider>,
  rootElement
);
