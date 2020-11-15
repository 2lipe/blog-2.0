import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, GatsbyLinkProps } from 'gatsby';

type PostItemTagProps = {
  background: string;
};

export const PostItemLink = styled(Link)<GatsbyLinkProps>`
  color: ${({ theme }) => theme.colors.texts};
  display: flex;
  text-decoration: none;

  body#grid & {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  display: flex;
  padding: 2rem 3rem;
  width: 100%;

  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan('large')`
    align-items: flex-start;
    flex-direction: column;
    padding: 2rem 1rem;
  `}
`;

export const PostItemTag = styled.div<PostItemTagProps>`
  align-items: center;
  background: ${props => (props.background ? props.background : props.theme.colors.background)};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 90px;
  min-width: 90px;
  text-transform: uppercase;

  ${media.lessThan('large')`
    border-radius: 0;
    font-size: 1rem;
    min-height: auto;
    min-width: auto;
    padding: .2rem .5rem;
    margin-bottom: .7rem;
  `}

  body#grid & {
    margin-bottom: 1.5rem;
  }
`;

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan('large')`
    margin: 0;
  `}
`;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`;

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;
