import flowerorange from '../../assets/icons/flower-b-orange.png'
import flowerblue from '../../assets/icons/flower-b-blue.png'
import flowergreen from '../../assets/icons/flower-b-green.png'

import './Testimonial.css';

const Testimonial = ({ text, i }) => {
  let color = "blue";
  let image = 'flowerblue';

  if (i === 0 || i === 3) {
    color = 'blue';
    image = flowerblue;
  } else if
  (i === 1 || i === 4) {
    color = 'orange';
    image = flowerorange;
  } else if (i === 2 || i === 5) {
    color = 'green';
    image = flowergreen;
  } else {
    color = 'blue';
    image = flowerblue;
  }

  return (
    <div className="testimonial-container">
      <img src={image} alt={`image of a flower ${color}`} />
      <p className={`${color}-text`} >{text}</p>
    </div>
  );
};

export default Testimonial;
