import styled from 'styled-components';
import media from 'styled-media-query';
import Img, { GatsbyImageProps } from 'gatsby-image';

export const AvatarWrapper = styled(Img)<GatsbyImageProps>`
  border-radius: 50%;
  height: 3.75rem;
  margin: auto;
  width: 3.75rem;

  ${media.lessThan('large')`
    height: 1.875rem;
    width: 1.875rem;
  `}
`;
