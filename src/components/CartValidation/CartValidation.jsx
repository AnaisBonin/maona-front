import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useApp } from '../../contexts/AppProvider';
import UserInformation from '../UserInformation/UserInformation';

import './CartValidation.css';

const CartValidation = ({ cartConfirmation, setCartConfirmation }) => {
  const { user, cart, finalOrder, setFinalOrder } = useApp();
  const [userValid, setUserValid] = useState(false);
  const [saveOrder, setSaveOrder] = useState(false);
  const navigator = useNavigate();

  const sendOrderToDB = async () => {
    return await axios.post(
      `${process.env.REACT_APP_API_URL}/orders`,
      finalOrder,
    );
  };

  const sendOrderLinesToDB = async () => {
    cart.map(async (cartArticle) => {
      const orderLine = {
        productName: cartArticle.name,
        quantity: cartArticle.quantity,
        price: cartArticle.price,
        totalPrice: cartArticle.totalPrice,
        orderId: finalOrder.id,
        productId: cartArticle.id,
      };

      return await axios.post(
        `${process.env.REACT_APP_API_URL}/orderlines`,
        orderLine,
      );
    });
  };

  const handleValidate = () => {
    sendOrderToDB();
    setSaveOrder(true);
  };

  const handleCancel = () => {
    setCartConfirmation(false);
  };

  useEffect(
    () =>
      setFinalOrder({
        ...finalOrder,
        id: `${new Date().getFullYear()}${new Date().getMonth() + 1
          }${new Date().getDate()}${new Date().getUTCMilliseconds()}`,
        date: new Date(),
        status: 'En cours',
      }),
    [cart],
  );

  useEffect(() => {
    if (saveOrder) {
      sendOrderLinesToDB();
      setCartConfirmation(false);
      navigator('/');
    }
  }, [saveOrder]);

  useEffect(() => {
    if (saveOrder === true && cartConfirmation === false) {
      return navigator('products');
      // return navigator(`validation-commande/${finalOrder.id}`);
    }
    return null;
  }, [saveOrder, cartConfirmation]);

  return (
    <section className="cart-validation-container">
      <div className="validation-box">
        {!userValid ? (
          <UserInformation setUserValid={setUserValid} />
        ) : (
          <div className="cart-validation-order">
            <h3>Bienvenue chez Maona {user.firstname} !</h3>
            <p>Nous nous apprétons à valider votre commande. Souhaitez-vous valider votre choix ?</p>
            <div className="cart-validation-buttons">
              <button
                type="button"
                className="button-cancel-validation"
                onClick={handleCancel}>
                Annuler
              </button>
              <button type="button" onClick={handleValidate}>
                Valider
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartValidation;
