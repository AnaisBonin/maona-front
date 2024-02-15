import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import ProductPage from './pages/ProductPage/ProductPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import AppProvider from './contexts/AppProvider';
import Authentification from './pages/Authentification/Authentification';

import './App.css';
import PostAuth from './pages/Authentification/PostOath';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/maona" element={<About />} />
          <Route path="/collection/:name" element={<Products />} />
          <Route path="/produits/:id" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/authentification" element={<Authentification />} />
          <Route path="/post_auth" element={<PostAuth />} />
          <Route path="/panier" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
