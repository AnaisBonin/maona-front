import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
  
      return setProduct(data);
    } catch (err) {
      return setProduct("error");
    }
  };

  console.log(`${process.env.REACT_APP_API_URL}/products/${id}`);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main className="product-page-container">
      {
        product && (
          <h1>{product.name}</h1>
        )
      }
    </main>
  );
};

export default ProductPage;
