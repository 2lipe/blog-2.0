import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, GatsbyLinkProps } from 'gatsby';

export const MenuLinksWrapper = styled.nav`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`;

export const MenuLinksItem = styled.li`
  padding: 0.5rem 0;

  .active {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;

export const MenuLinksLink = styled(Link)<GatsbyLinkProps>`
  color: ${({ theme }) => theme.colors.texts};
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
