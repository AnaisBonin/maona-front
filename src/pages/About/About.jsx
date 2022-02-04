import AboutMe from '../../components/AboutMe/AboutMe';
import InDevelopment from '../../components/InDevelopment/InDevelopment';
import PageTitle from '../../components/PageTitle/PageTitle';

import './About.css';

const About = () => {
  return (
    <main>
      <PageTitle title="A propos de Maona" />
        <AboutMe />
      <InDevelopment />
    </main>
  );
};

export default About;
