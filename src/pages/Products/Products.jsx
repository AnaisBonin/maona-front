import { useParams } from 'react-router-dom';

import './Products.css';

const Products = () => {
  const { name } = useParams();

  return <div>Collection pour {name}</div>;
};

export default Products;
