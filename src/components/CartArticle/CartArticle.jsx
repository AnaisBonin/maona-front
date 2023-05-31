import { useEffect, useState } from 'react';

import { useApp } from '../../contexts/AppProvider';

import './CartArticle.css';

const CartArticle = ({ article }) => {
  const { cart, setCart } = useApp();
  const [totalPrice, setTotalPrice] = useState(() => {
    return article.quantity * article.price;
  });

  const handleChange = (e) => {
    setCart(
      cart.map((product) =>
        product.id === article.id
          ? {
            ...product,
            quantity: parseInt(e.target.value),
          }
          : product,
      ),
    );
  };

  const handleDelete = () => {
    setCart(cart.filter((product) => product.id !== article.id));
  }

  useEffect(() => {
    setTotalPrice(article.quantity * article.price);
  }, [cart]);

  useEffect(() => {
    setCart(
      cart.map((product) => (product.id === article.id)
        ? {
          ...product,
          totalPrice,
        }
        : product,
      ),
    );
  }, [totalPrice, article.quantity]);

  return (
    <div className="cart-article-box">
      <div className="cart-article-img">
        <img
          src={`${process.env.REACT_APP_API_URL}${article.link}`}
          alt={`One of our ${article.name}`}
        />
      </div>
      <div className="cart-article-information">
        <h3>{article.name}</h3>
        <p>{article.shortDescription}</p>
        <p>{article.price}€</p>
        <button
          type="button"
          className="cart-delete-article"
          onClick={handleDelete}
        >
          Supprimer
        </button>
      </div>
      <div className="cart-article-quantity">
        <div className="cart-article-cercle">
          <label htmlFor="quantity">
            x
          </label>
          <input
            type="number"
            id="quantity"
            value={article.quantity}
            min="1"
            max={article.stock}
            onChange={handleChange}
          />
        </div>
        <p>total : <span className="article-total-price">{totalPrice}€</span></p>
      </div>
    </div>
  );
};

export default CartArticle;
