import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, GatsbyLinkProps } from 'gatsby';

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders};
  border-top: 1px solid ${({ theme }) => theme.colors.borders};
  background: ${({ theme }) => theme.colors.mediumBackground};
  display: flex;
`;

export const RecommendedLink = styled(Link)<GatsbyLinkProps>`
  align-items: center;
  background: ${({ theme }) => theme.colors.mediumBackground};
  color: ${({ theme }) => theme.colors.highlight};
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;

  ${media.lessThan('large')`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.borders};
  }

  &.previous {
    border-right: 1px solid ${({ theme }) => theme.colors.borders};
  }

  &.next {
    justify-content: flex-end;
  }

  &.previous:before {
    content: '\\2190';
    margin-right: 0.5rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.5rem;
  }
`;
