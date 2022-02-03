import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useApp } from '../../contexts/AppProvider';
import CartValidation from '../../components/CartValidation/CartValidation';

import CartArticle from '../../components/CartArticle/CartArticle';
import PageTitle from '../../components/PageTitle/PageTitle';
import TotalOrder from '../../components/TotalOrder/TotalOrder';

import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cart } = useApp();
  const [cartConfirmation, setCartConfirmation] = useState(false);

  return (
    <main className="cart-main-container">
      <PageTitle title="Panier" />
      <section className="cart-articles-container">
        {cart &&
          cart.map((article, i) => (
            <CartArticle article={article} key={i} />
          ))}
        {cart.length === 0 && (
          <div className="cart-no-article">
            <p>Vous n'avez aucun article dans votre panier</p>
            <Link to="/">
              <button>Continuez d'explorer</button>
            </Link>
          </div>
        )}
      </section>
      <TotalOrder setCartConfirmation={setCartConfirmation} />
      {cartConfirmation && (
        <CartValidation
          setCartConfirmation={setCartConfirmation}
        />
      )}
    </main>
  );
};

export default ShoppingCart;
