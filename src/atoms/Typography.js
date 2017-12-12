import styled from 'styled-components';

const HeroHeader = styled.h1`
  font-size: 3.915rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.4;
  margin: 0;
`;

const LargeHeader = styled.h1`
  font-size: 2.937rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.4;
  margin: 0;
`;

const MediumHeader = styled.h2`
  font-size: 2.203rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.4;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const SmallPrimary = styled.h2`
  font-size: 1.653rem;
  font-weight: 400;
  color: #536DFE;
  line-height: 1.4;
  font-style: italic;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const SmallHeader = styled.h3`
  font-size: 1.653rem;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#546E7A' : '#212121'};
  line-height: 1.4;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;


const Paragraph = styled.p`
  font-size: 1.26rem;
  line-height: 1.6;
  color: #546E7A;
`;

const ItalicSpan = styled.span`
  font-size: 1.26rem;
  line-height: 1.6;
  font-style: italic;
  color: #546E7A;
`;

const Caption = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #78909C;
`;

const InlineCaption = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #90A4AE;
  font-style: italic;
`;

const CaptionHeader = styled.span`
  font-size: 1.2rem;
  line-height: 1.5;
  color: #212121;
  font-style: italic;
`;

export {HeroHeader, LargeHeader, MediumHeader, SmallHeader, Paragraph, Caption, InlineCaption, CaptionHeader, ItalicSpan, SmallPrimary};