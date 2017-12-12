import styled from 'styled-components';
import { MediumHeader } from '../atoms/Typography';

const LinkBody = styled.span`
  color: #212121;
  border-bottom: 1px solid #536DFE;
  
  &:hover {
    color: #536DFE;
    border-bottom: 1px solid #536DFE;
    transition: all .3s ease;
  }
`;

const LinkHeader = styled.span`
  color: #212121;
  display: inline-block;
  position: relative;
  &:hover:before {
    width: 100%;
    transition: width .4s ease;
  }

  &:hover {
    color: #212121;
  }

  &:before {
    background: rgba(61,90,254,.1);
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    bottom: 1px;
    height: 30%;
    width: 0;
    transition: width 0s ease,background .4s ease;
  }

  &:after {
    background: rgba(61,90,254,.2);
    content: '';
    display: block;
    position: absolute;
    left: 5px;
    bottom: 1px;
    height: 30%;
    width: 100%;
    transition: width 0s ease,background .4s ease;
  }

  &:hover:before {
    width: 100%;
    transition: width .4s ease;
  }

  &:hover:after {
    width: 100%;
    background: rgba(61,90,254,.2);
    transition: width .4s ease;
  }
`;

export { LinkHeader, LinkBody };