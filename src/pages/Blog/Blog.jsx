import BlogArticle from '../../components/BlogArticle/BlogArticle';
import InDevelopment from '../../components/InDevelopment/InDevelopment';
import PageTitle from '../../components/PageTitle/PageTitle';

import './Blog.css';

const Blog = () => {
  return (
    <main> 
      <PageTitle title="Blog" />
      <BlogArticle />
      <InDevelopment />
    </main>
  );
};

export default Blog;
