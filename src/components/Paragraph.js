import styled from 'styled-components';

import fontSize from '../atoms/fontSize';
import fontFamily from '../atoms/fontFamily';
import fontWeight from '../atoms/fontWeight';
import lineHeight from '../atoms/lineHeight';
import textColor from '../atoms/textColor';

const Paragraph = styled.p`
  font-size: ${fontSize.xs};
  font-family: ${fontFamily.body};
  font-weight: ${fontWeight.regular};
  line-height: ${lineHeight.spaced};
  color: ${textColor.secondary}
  font-style: ${props => props.italic ? 'italic' : 'none'};
`;

export default Paragraph;