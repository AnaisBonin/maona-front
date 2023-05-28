import { useEffect, useState } from 'react';
import axios from 'axios';

import BlogParagraph from '../BlogParagraph/BlogParagraph';

import './BlogArticle.css';

const BlogArticle = () => {
  const [article, setArticle] = useState();

  const fetchArticle = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/articles`,
    );
    return setArticle(data);
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <>
      {article &&
        article.map((article, i) => (
          <article className="article-container" key={i}>
            <h2>{article.title}</h2>
            <img src={`${process.env.REACT_APP_API_URL}${article.img}`} alt="Our workshop" />
            <BlogParagraph />
          </article>
        ))}
    </>
  );
};

export default BlogArticle;
