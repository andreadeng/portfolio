import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import MarginBottomM from './MarginBottomM'; 
import Header from './Header';

function TextSection(props) {
  return (
    <MarginBottomM text>
      <Header medium>
        {props.header}
      </Header>
      {props.content}
    </MarginBottomM>
  );
}

export default TextSection;