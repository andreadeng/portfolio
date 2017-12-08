import styled from 'styled-components';

const HeroHeader = styled.h1`
  font-size: 3.915rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.6;
  margin: 0;
`;

const LargeHeader = styled.h1`
  font-size: 2.937rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.6;
  margin: 0;
`;

const MediumHeader = styled.h2`
  font-size: 1.653rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.6;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const SmallHeader = styled.h3`
  font-size: 1.24rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.6;
  margin: 0;
`;


const Paragraph = styled.p`
  font-size: 1.24rem;
  line-height: 1.6;
  color: #546E7A;
`;

const Caption = styled.p`
  font-size: 1.1rem;
  line-height: 1.4;
  color: #78909C;
`;

export {HeroHeader, LargeHeader, MediumHeader, SmallHeader, Paragraph, Caption};