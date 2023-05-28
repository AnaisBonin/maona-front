import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './ProductCard.css';

const ProductCard = ({ name, shortDescription, price, id }) => {
  const [image, setImage] = useState();
  const env = process.env.REACT_APP_API_URL;
  const accessories = `${env}/uploads/accessories.png`;

  const fetchImage = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/images?productId=${id}&coverPicture=1`);

    setImage(data);
  }

  useEffect(() => {
    fetchImage();
  }, [id]);

  return (
    <Link to={`/produits/${id}`}>
      <div className="product-card-container">
        <div className="product-card-image">
          <img src={image ? `${env}${image[0].link}` : accessories} alt={`One of our ${image}`} />
        </div>
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
