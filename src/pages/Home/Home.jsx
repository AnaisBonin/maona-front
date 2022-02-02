import { useState, useEffect } from 'react';
import axios from 'axios';

import AboutMe from '../../components/AboutMe/AboutMe';

import ProductCard from '../../components/ProductCard/ProductCard';
import Testimonial from '../../components/Testimonial/Testimonial';

import './Home.css';

const Home = () => {
  const [essentials, setEssentials] = useState([]);
  const [testimonials, setTestimonials] = useState();

  const fetchEssentials = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/products?isEssential=true&isAvailable=true`
      );

      return setEssentials(data);
    } catch (err) {
      return null;
    }
  };

  const fetchTestimonials = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/testimonials`
      );
      return setTestimonials(data);
    } catch (err) {
      return setTestimonials('error');
    }
  };

  useEffect(() => {
    fetchEssentials();
    fetchTestimonials();
  }, []);

  return (
    <main className="home-container">
      <AboutMe />
      <h2 className="home-essentials-title">Nos essentiels</h2>
      <div className="home-essentials-cards">

      {essentials === 'error' && (
        <p>Oops! Nous rencontrons une erreur - veuillez nous excuser.</p>
        )}
      {essentials &&
        essentials.map((product, i) => (
          <ProductCard
          name={product.name}
          price={product.price}
          shortDescription={product.shortDescription}
          id={product.id}
          key={i}
          />
          ))}
          </div>
      <h2 className="home-testimonials-title">Témoignages</h2>
      {testimonials &&
        testimonials.map((comment, i) => (
          <Testimonial text={comment.text} i={i} key={i} />
        ))}
    </main>
  );
};

export default Home;
