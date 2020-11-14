import styled from 'styled-components';
import media from 'styled-media-query';
import { Link, GatsbyLinkProps } from 'gatsby';

export const MenuBarWrapper = styled.aside`
  align-items: center;
  background: ${({ theme }) => theme.colors.mediumBackground};
  border-left: 1px solid ${({ theme }) => theme.colors.borders};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  padding: 0.8rem 0;
  position: fixed;
  right: 0;
  width: 3.75rem;
  transition: background 0.5s;

  ${media.lessThan('large')`
    border-top: 1px solid ${({ theme }) => theme.colors.borders};
    bottom: 0;
    flex-direction: row;
    height: auto;
    padding: 0;
    position: fixed;
    width: 100%;
  `}
`;

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    flex-direction: row;
  `}
`;

export const MenuBarLink = styled(Link)<GatsbyLinkProps>`
  display: block;

  &.active {
    span {
      color: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: ${({ theme }) => theme.colors.yellowLime};

    &:hover {
      color: ${({ theme }) => theme.colors.yellowLight};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.highlight};
  }

  &.display {
    ${media.lessThan('large')`
      display: none;
    `}
  }

  ${media.greaterThan('large')`
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
    }
  `}

  ${media.lessThan('large')`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`;
