import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import './App.css';
import Products from './pages/Products/Products';
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/maona" element={<About />} />
        <Route path="/collection/:name" element={<Products />} />
        <Route path="/produits/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
