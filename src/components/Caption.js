import styled from 'styled-components';

import fontSize from '../atoms/fontSize';
import lineHeight from '../atoms/lineHeight';
import textColor from '../atoms/textColor';

const Caption = styled.p`
  font-size: ${fontSize.xxs};
  color: ${props => props.primary ? `${textColor.primary}` : `${textColor.secondary}` };
  font-style: ${props => props.italic ? 'italic' : 'none'};
  text-align: ${props => props.centered ? 'center' : 'left'};
  font-weight: ${props => props.strong ? 'bold' : 'regular'};
  lineHeight: ${lineHeight.default};
  margin: 0;
`;

export default Caption;