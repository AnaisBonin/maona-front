import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ name, shortDescription, price, id }) => {
  return (
    <Link to={`/produits/${id}`}>
      <div className="product-card-container">
        <div className="product-card-image" />
        <div className="product-card-information">
          <h3>{name}</h3>
          <p>{shortDescription}</p>
          <p>{price}€</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
