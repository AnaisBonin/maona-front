import AboutMe from '../../components/AboutMe/AboutMe';
import AboutParagraph from '../../components/AboutParagraph/AboutParagraph';
import InDevelopment from '../../components/InDevelopment/InDevelopment';
import PageTitle from '../../components/PageTitle/PageTitle';

import flowerBlue from '../../assets/icons/flower-d-blue.png';
import flowerOrange from '../../assets/icons/flower-e-orange.png';
import flowerYellow from '../../assets/icons/flower-c-cream.png';
import maeva from '../../assets/images/maeva.png'

import './About.css';

const About = () => {
  return (
    <main>
      <PageTitle title="A propos de Maona" />
      <section className="about-introduction-container">
        <img src={maeva} alt="Photo de notre créatrice Maéva" />
        <div className="about-introduction-content">
          <h2>
            Le mot de la créatrice
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales leo porttitor scelerisque. In nec felis quis dui placerat hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
        </div>
      </section>
      <section>
        <AboutParagraph 
          image={flowerBlue}
          alt="Image d'une fleur verte"
          color="blue-text"
          title="Notre ambition"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales leo porttitor scelerisque. In nec felis quis dui placerat hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum."
        />
        <AboutParagraph 
          image={flowerOrange}
          alt="Image d'une fleur orange"
          color="orange-text"
          title="Nos engagements"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales leo porttitor scelerisque. In nec felis quis dui placerat hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum."
        />
        <AboutParagraph 
          image={flowerYellow}
          alt="Image d'une fleur jaune"
          color="cream-text"
          title="A l'avenir"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum. Duis vestibulum sed dui sit amet efficitur. Aliquam congue enim velit, nec sodales leo porttitor scelerisque. In nec felis quis dui placerat hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, purus et accumsan scelerisque, arcu massa molestie massa, sit amet blandit erat tortor a ante. Cras ullamcorper turpis vitae laoreet elementum."
        />
      </section>
    </main>
  );
};

export default About;
