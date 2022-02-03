import axios from 'axios';
import { useEffect, useState } from 'react';

import UserInformation from '../UserInformation/UserInformation';

import './CartValidation.css';

const CartValidation = ({
  setCartConfirmation,
  setSaveOrder,
}) => {
  const handleValidate = () => {
    setSaveOrder(true);
    setCartConfirmation(false);
  };

  const handleCancel = () => {
    setCartConfirmation(false);
  };


  // useEffect(
  //   () =>
  //     setFinalOrder({
  //       ...finalOrder,
  //       id: `${new Date().getFullYear()}${
  //         new Date().getMonth() + 1
  //       }${new Date().getDate()}${new Date().getUTCMilliseconds()}`,
  //       date: new Date(),
  //       totalOrder,
  //       status: 'En cours',
  //     }),
  //   [cartArray, totalOrder, cartConfirmation],
  // );

  // useEffect(() => {
  //   sendOrderToDB();
  //   sendOrderLinesToDB();
  // }, [saveOrder]);

  // useEffect(() => {
  //   if (saveOrder === true && cartConfirmation === false) {
  //     return navigator('products');
  //     // return navigator(`validation-commande/${finalOrder.id}`);
  //   }
  //   return null;
  // }, [saveOrder, cartConfirmation]);

    // const [saveOrder, setSaveOrder] = useState(false);

    // const sendOrderToDB = async () => {
  //   if (saveOrder) {
  //     return await axios.post(
  //       `${process.env.REACT_APP_API_URL}/orders`,
  //       finalOrder,
  //     );
  //   }
  //   return null;
  // };

  // const sendOrderLinesToDB = async () => {
  //   if (saveOrder) {
  //     cartArray.map(async (cartArticle) => {
  //       const orderLine = {
  //         productName: cartArticle.name,
  //         quantity: cartArticle.quantity,
  //         price: cartArticle.price,
  //         totalPrice: cartArticle.totalPrice,
  //         orderId: finalOrder.id,
  //         productId: cartArticle.id,
  //       };

  //       return await axios.post(
  //         `${process.env.REACT_APP_API_URL}/order-lines`,
  //         orderLine,
  //       );
  //     });
  //   }
  // };

  return (
    <section className="cart-validation-container">
      <UserInformation /> 
      <div className="cart-validation-buttons">
        <button type="button" className="button-cancel-validation" onClick={handleCancel}>
          Annuler
        </button>
        <button type="button" onClick={handleValidate}>
          Valider
        </button>
      </div>
    </section>
  );
};

export default CartValidation;
