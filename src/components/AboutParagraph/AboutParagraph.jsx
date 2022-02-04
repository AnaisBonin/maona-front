import './AboutParagraph.css';

const AboutParagraph = ({ image,
  alt,
  color,
  title,
  content,
}) => {
  return (
    <section className="about-paragraph-container">
      <img src={image} alt={alt} />
      <div className="about-paragraph-content">
        <h3 className={color} >{title}</h3>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default AboutParagraph;
