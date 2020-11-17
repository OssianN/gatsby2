import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const BlogPosts = async ({ data }) => {
  const blogPosts = data.allContentfulBlog.edges;
  try {
    const attempt = await fetch('/api/test');
    console.log('Im trying');
    console.log(attempt.body, '===attempt===');
  } catch(err) {
    console.log('I failed');
    console.error(err);
  }

  return (
    <Layout>
      <SEO title="Blog posts" />
      <h1>{"Here's a list of all blogposts!"}</h1>
      <div className="blogposts">
        {blogPosts.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
};
export default BlogPosts;
export const query = graphql`
  query BlogPostsPageQuery {
    allContentfulBlog(limit: 1000) {
      edges {
        node {
          id
          title
          slug
          body {
            body
          }
          image {
            file {
              url
            }
          }
          tags
        }
      }
    }
  }
`;