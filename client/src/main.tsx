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

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="explore" element={<Explore />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
