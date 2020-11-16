import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
// import Comments from '../components/Comments';
import { PageContext } from '../models/PageContext';

import * as S from '../components/Post/styled';

type BlogPostProps = {
  data: {
    markdownRemark: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        description: string;
        date: string;
        image: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
      html: string;
      timeToRead: string;
    };
  };
  pageContext: {
    previousPost: PageContext;
    nextPost: PageContext;
  };
};

const BlogPost = ({ data, pageContext }: BlogPostProps) => {
  const post = data.markdownRemark;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      {/* <Comments url={post.fields.slug} title={post.frontmatter.title} /> */}
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
