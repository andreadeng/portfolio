import React from 'react';
import styled from 'styled-components';

const HeroHeader = styled.h1`
  font-size: 3.157em;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#616161' : '#212121'};
  line-height: 1.6;
`;

const LargeHeader = styled.h1`
  font-size: 2.369em;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#616161' : '#212121'};
  line-height: 1.6;
`;

const MediumHeader = styled.h2`
  font-size: 1.777em;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#616161' : '#212121'};
  line-height: 1.6;
`;

const SmallHeader = styled.h3`
  font-size: 1.333em;
  font-weight: ${props => props.light ? '400' : '600'};
  color: ${props => props.secondary ? '#616161' : '#212121'};
  line-height: 1.6;
`;


const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #616161;
`;

export {HeroHeader, LargeHeader, MediumHeader, SmallHeader, Paragraph};