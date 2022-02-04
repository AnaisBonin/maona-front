import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ProductCard.css';
import AddButton from '../AddButton/AddButton';

const ProductCard = (product) => {
  const [image, setImage] = useState();
  const env = process.env.REACT_APP_API_URL;
  const accessories = `${env}/uploads/accessories.png`;

  const fetchImage = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/images?productId=${product.id}&coverPicture=1`);

    setImage(data);
  }

  useEffect(() => {
    fetchImage();
  }, [product.id]);

  return (
    <section className="product-card-container">
      <Link to={`/produits/${product.id}`}>
          <div className="product-card-image">
            <img src={ image ? `${env}${image[0].link}` : accessories } alt={`Image of a ${image}`} />
          </div>
      </Link>
        <div className="product-card-content">
          <div className="product-card-information">
            <h3>{product.name}</h3>
            <p>{product.shortDescription}</p>
            <p>{product.price}€</p>
          </div>
          <AddButton product={product} />
        </div>
    </section>
  );
};

export default ProductCard;
