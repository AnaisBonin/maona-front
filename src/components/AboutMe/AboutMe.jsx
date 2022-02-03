import line from '../../assets/icons/flower-line-yellow.png';

import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me-title">Qui sommes-nous ?</h2>
      <img src={line} alt="Line decoration" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. </p>
    </section>
  );
};

export default AboutMe;
