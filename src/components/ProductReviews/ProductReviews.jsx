import { useEffect, useState } from 'react';
import axios from 'axios';

import lineOrange from '../../assets/icons/flower-line-orange.png';
import arrow from '../../assets/icons/arrow.png';

import './ProductReviews.css';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState();
  const [selectedReview, setSelectedReview] = useState();
  const [number, setNumber] = useState(0);

  const fetchProductReviews = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/reviews`,
      // `${process.env.REACT_APP_API_URL}/reviews?productId=${productId}`,
    );
    return setReviews(data);
  };

  const handleclickLeft = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const handleclickRight = () => {
    if (number+1 < reviews.length) {
      setNumber(number + 1);
    }
  };

  useEffect(() => {
    fetchProductReviews();
  }, [productId]);

  useEffect(() => {
    if (reviews) {
      setSelectedReview(reviews[number]);
    }
  }, [reviews, number]);
  
  console.log(selectedReview);

  return (
    <section className="product-reviews-container">
      <h3>Avis</h3>
      <img src={lineOrange} alt="Icon of an orange line" />
      {selectedReview && (
        <div className="product-reviews">
          <button type="button" onClick={handleclickLeft}>
            <img
              src={arrow}
              className="arrow-icon arrow-left"
              alt="Icone d'une flèche vers la gauche"
            />
          </button>
          <div>
            <p>{selectedReview.text} <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. </p>
            <p className="review-writter">{selectedReview.firstname}</p>
          </div>
          <button type="button" onClick={handleclickRight}>
            <img
              src={arrow}
              className="arrow-icon arrow-right"
              alt="Icone d'une flèche vers la droite"
            />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductReviews;
