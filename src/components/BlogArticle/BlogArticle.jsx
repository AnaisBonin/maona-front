import BlogParagraph from '../BlogParagraph/BlogParagraph';

import image from '../../assets/images/Atelier.jpg'

import './BlogArticle.css';

const BlogArticle = () => {
  return (
    <article>
      <h2>Article Title</h2>
      <img src={image} alt="Picture of a workshop" />
      <BlogParagraph />
    </article>
  );
};

export default BlogArticle;
