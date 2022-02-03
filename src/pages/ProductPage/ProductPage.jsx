import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AddButton from '../../components/AddButton/AddButton';
import ProductReviews from '../../components/ProductReviews/ProductReviews';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/${id}`,
      );

      return setProduct(data);
    } catch (err) {
      return setProduct('error');
    }
  };

  console.log(product);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <main className="product-page-container">
      {product && (
        <>
          <h1 className="product-page-title allura">
            Collection {product.category}
          </h1>
          <section className="product-page-images">
            <img
              src={product.mainImage}
              className="main-product-image"
              alt="Image d'une gigoteuse d'été"
            />
            <div className="product-small-images">
              <img
                src={product.mainImage}
                className="small-product-image"
                alt="Petite image d'une gigoteuse d'été"
              />
              <img
                src={product.mainImage}
                className="small-product-image"
                alt="Petite image d'une gigoteuse d'été"
              />
              <img
                src={product.mainImage}
                className="small-product-image"
                alt="Petite image d'une gigoteuse d'été"
              />
            </div>
          </section>
          <section className="product-page-information">
            <h2>{product.name}</h2>
            <p>{product.shortDescription}. Fabriquée à partir de tissus respectueux de la peau sensible des bébés, comme le lin et le coton bio. </p>
            <div className="product-page-price">
              <p>{product.price}€</p>
              <AddButton product={product} />
            </div>
          </section>
          <section className="product-page-description">
            <h3>Description du produit</h3>
            <p>{product.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales leo porttitor scelerisque. In nec felis quis dui placerat hendrerit. Quisque ac tellus velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et nunc orci. Pellentesque eu justo vel magna eleifend cursus vel id urna. Praesent id viverra diam.</p>
          </section>
          <ProductReviews productId={product.id} />
        </>
      )}
    </main>
  );
};

export default ProductPage;
