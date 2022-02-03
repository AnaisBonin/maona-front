import { useParams } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';

import './Products.css';

const Products = () => {
  const { name } = useParams();

  return (
    <main>
      <PageTitle title={`Collection pour ${name}`} />
    </main>
  );
};

export default Products;
