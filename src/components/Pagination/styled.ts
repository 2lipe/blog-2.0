import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, GatsbyLinkProps } from 'gatsby';

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.borders};
  color: ${({ theme }) => theme.colors.texts};
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  ${media.lessThan('large')`
    font-size: .8rem;
    padding: 1rem;
  `}

  a {
    color: ${({ theme }) => theme.colors.texts};
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const PaginationLink = styled(Link)<GatsbyLinkProps>``;
