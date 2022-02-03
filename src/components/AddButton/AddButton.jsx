import { useEffect, useState } from 'react';
import { useApp } from '../../contexts/AppProvider';

import flower from '../../assets/icons/flower-a-white.png';

import './AddButton.css';

const AddButton = ({ product }) => {
  const { cart, setCart } = useApp();
  const [isInCart, setIsInCart] = useState();

  useEffect(() => {
    const inCart = cart.find((article) => article.id === product.id);
    if (inCart) return setIsInCart(true);
    return setIsInCart(false);
  }, [cart]);

  const handleClick = () => {
    setIsInCart(!isInCart);
    if (!isInCart) {
      setCart([
        ...cart,
        {
          ...product,
        },
      ]);
    } else {
      setCart(cart.filter((article) => product.id !== article.id));
    }
  };

  console.log(cart);

  return (
    <button className="add-product-button" onClick={handleClick}>
      { isInCart 
      ? <img src={flower} alt="Icone d'une fleur blanche" />
      : <p>+</p>
    }
    </button>
  );
};

export default AddButton;
