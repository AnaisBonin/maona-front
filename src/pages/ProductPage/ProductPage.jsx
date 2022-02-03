import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import AddButton from '../../components/AddButton/AddButton';
import ProductReviews from '../../components/ProductReviews/ProductReviews';
import PageTitle from '../../components/PageTitle/PageTitle';

import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState();
  const [cover, setCover] = useState();

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

  const fetchImages = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/images?productId=${id}&coverPicture=0`,
    );
    setImages(data);
  };

  const fetchCover = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/images?productId=${id}&coverPicture=1`,
    );
    setCover(data);
  };

  useEffect(() => {
    fetchProduct();
    fetchImages();
    fetchCover();
  }, [id]);

  console.log('product');
  console.log(product);
  console.log('cover');
  console.log(cover);
  console.log('images');
  console.log(images);

  return (
    <main className="product-page-container">
      {product && (
        <>
          <PageTitle title={`Collection ${product.category}`} />
          <section className="product-page-images">
            {cover && (
              <img
                src={`${process.env.REACT_APP_API_URL}${cover[0].link}`}
                className="main-product-image"
                alt="Image d'une gigoteuse d'été"
              />
            )}
            {images && (
              <div className="product-small-images">
                {images.map((image, i) => (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${image.link}`}
                    className="small-product-image"
                    alt={image.title}
                    key={i}
                  />
                ))}
              </div>
            )}
          </section>
          <section className="product-page-information">
            <h2>{product.name}</h2>
            <p>
              {product.shortDescription}. Fabriquée à partir de tissus
              respectueux de la peau sensible des bébés, comme le lin et le
              coton bio.{' '}
            </p>
            <div className="product-page-price">
              <p>{product.price}€</p>
              <AddButton product={product} />
            </div>
          </section>
          <section className="product-page-description">
            <h3>Description du produit</h3>
            <p>
              {product.description} Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Etiam porttitor, purus et accumsan scelerisque,
              arcu massa molestie massa, sit amet blandit erat tortor a ante.
              Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum
              sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales
              leo porttitor scelerisque. In nec felis quis dui placerat
              hendrerit. Quisque ac tellus velit. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Quisque
              et nunc orci. Pellentesque eu justo vel magna eleifend cursus vel
              id urna. Praesent id viverra diam.
            </p>
          </section>
          <ProductReviews productId={product.id} />
        </>
      )}
    </main>
  );
};

export default ProductPage;
