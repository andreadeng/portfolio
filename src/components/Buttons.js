import styled from 'styled-components';
import { MediumHeader } from './Typography';

const LinkBody = styled.span`
  color: #212121;
  border-bottom: 1px solid #536DFE;
  
  &:hover {
    color: #536DFE;
    border-bottom: 1px solid #536DFE;
    -webkit-transition: all .4s ease;
    transition: all .3s ease;
  }
  
`;

const LinkHeader = styled.span`
  color: #212121;
  display: inline-block;
  position: relative;
  &:hover:before {
    width: 100%;
    -webkit-transition: width .4s ease;
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
    -webkit-transition: width 0s ease,background .4s ease;
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
    -webkit-transition: width 0s ease,background .4s ease;
    transition: width 0s ease,background .4s ease;
  }

  &:hover:before {
    width: 100%;
    -webkit-transition: width .4s ease;
    transition: width .4s ease;
  }

  &:hover:after {
    width: 100%;
    background: rgba(61,90,254,.2);
    -webkit-transition: width .4s ease;
    transition: width .4s ease;
  }
`;

export { LinkHeader, LinkBody };