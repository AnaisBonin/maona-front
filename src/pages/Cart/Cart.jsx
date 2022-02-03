import { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppProvider';
import { Link } from 'react-router-dom';

import CartArticle from '../../components/CartArticle/CartArticle';
import PageTitle from '../../components/PageTitle/PageTitle';

import flower from '../../assets/icons/flower-e-orange.png'

import './Cart.css';

const Cart = () => {
  const { cart: cartArray, totalQuantity } = useApp();

  const [totalPrice, setTotalPrice] = useState(() => {
    const array = cartArray.map((article) => article.totalPrice);
    const reducer = (a, b) => a + b;

    if (cartArray.length > 0) {
      return array.reduce(reducer);
    }
    return 0;
  });
  const calculateTotalPrice = () => {
    setTotalPrice(() => {
      const array = cartArray.map((article) => article.totalPrice);
      const reducer = (a, b) => a + b;

      if (cartArray.length > 0) {
        return array.reduce(reducer);
      }
      return 0;
    });
  };

  useEffect(calculateTotalPrice, [cartArray]);

  return (
    <main className="cart-main-container">
      <PageTitle title="Panier" />
      <section className="cart-articles-container">
      { cartArray && cartArray.map((article, i) => <CartArticle article={article} key={i} />
      )}
      { (cartArray.length === 0) && (
      <div className="cart-no-article">
        <p>Vous n'avez aucun article dans votre panier</p>
        <Link to='/'>
          <button>Continuez d'explorer</button>
        </Link>
      </div>
      )}
      </section>
      <section className="cart-total-order">
        <div className="cart-total-order-information">
          <h3>Total de votre commande :</h3>
          <p>{totalQuantity} articles</p>
          <p>{totalPrice}€</p>
          <button type="button">Valider</button>
        </div>
        <img src={flower} alt="Image of an orange flower" />
      </section>
    </main>
  );
};

export default Cart;
