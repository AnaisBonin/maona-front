import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import PageTitle from '../../components/PageTitle/PageTitle';
import ProductCard from '../../components/ProductCard/ProductCard';

import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { name: categoryName } = useParams();

  const fetchProductsByCategory = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/categories/${categoryName}/products`,
      { params: { isAvailable: true } },
    );
    setProducts(data);
  };

  console.log(products);

  useEffect(() => {
    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <main>
      <PageTitle title={`Collection pour ${categoryName}`} />
      <section className="products-cards-container">
      {products &&
          products.map((product, i) => (
            <ProductCard
              name={product.name}
              price={product.price}
              shortDescription={product.shortDescription}
              id={product.id}
              key={i}
            />
          ))}
      </section>
    </main>
  );
};

export default Products;
