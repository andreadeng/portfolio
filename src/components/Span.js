import styled from 'styled-components';
import textColor from '../atoms/textColor';
import fontWeight from '../atoms/fontWeight';


const Span = styled.span`
  font-style: ${props => props.italic ? 'italic' : 'none'};
  color: ${props => props.primary ? `${textColor.primary}` : `${textColor.secondary}`};
  font-weight: ${props => props.strong ? `${fontWeight.bold}` : `${fontWeight.regular}`};
`;

export default Span;