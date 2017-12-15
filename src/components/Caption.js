import styled from 'styled-components';

import fontSize from '../atoms/fontSize';
import lineHeight from '../atoms/lineHeight';
import textColor from '../atoms/textColor';

const Caption = styled.p`
  font-size: ${fontSize.xxs};
  color: ${textColor.secondary};
  font-style: ${props => props.italic ? 'italic' : 'none'};
  lineHeight: ${lineHeight.default};
`;

export default Caption;