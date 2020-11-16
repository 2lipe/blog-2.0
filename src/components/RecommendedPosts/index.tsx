import React from 'react';

import * as S from './styled';

type RecommendedPostsProps = {
  next: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  };
  previous: {
    frontmatter: {
      title: string;
    };
    fields: {
      slug: string;
    };
  };
};

const RecommendedPosts = ({ next, previous }: RecommendedPostsProps) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug} cover direction="left" className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink to={next.fields.slug} cover direction="right" className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

export default RecommendedPosts;
