import flower from '../../assets/icons/flower-d-orange.png';

import './InDevelopment.css';

const InDevelopment = () => {
  return (
    <section className="in-dev">
      <h3>Page en cours de création</h3>
      <img src={flower} alt="Image d'une fleur" />
    </section>
  );
};

export default InDevelopment;
