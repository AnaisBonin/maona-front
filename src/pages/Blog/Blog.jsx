import BlogArticle from '../../components/BlogArticle/BlogArticle';
import PageTitle from '../../components/PageTitle/PageTitle';

import './Blog.css';

const Blog = () => {
  return (
    <main> 
      <PageTitle title="Blog" />
      <BlogArticle />
    </main>
  );
};

export default Blog;
