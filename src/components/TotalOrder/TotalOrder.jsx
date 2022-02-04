import { useApp } from '../../contexts/AppProvider';
import CartValidation from '../../components/CartValidation/CartValidation';

import flower from '../../assets/icons/flower-e-orange.png';

import './TotalOrder.css';

const TotalOrder = ({ setCartConfirmation }) => {
  const { finalOrder, totalQuantity } = useApp();

  const handleValidation = () => setCartConfirmation(true);

  return (
    <section className="total-order-container">
      {finalOrder && (
        <div className="cart-total-order-information">
          <h3>Total de votre commande :</h3>
          <p>{totalQuantity} articles</p>
          <p>{finalOrder.totalOrder}€</p>
          <button type="button" onClick={handleValidation}>
            Valider
          </button>
        </div>
      )}
      <img src={flower} alt="Image of an orange flower" />
    </section>
  );
};

export default TotalOrder;
