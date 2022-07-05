import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import NothingFound from './components/404';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quotes" element={<Quotes />} />
        <Route
          path="*"
          element={<NothingFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
