import styled from 'styled-components';

const Span = styled.span`
  font-style: ${props => props.italic ? 'italic' : 'none'};
`;

export default Span;