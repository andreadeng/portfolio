import React from 'react';
import styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import Header from './Header';

function TextSectionSub(props) {
  return (
    <MarginBottomS text>
      <Header small>
        {props.header}
      </Header>
      {props.content}
    </MarginBottomS>
  );
}

export default TextSectionSub;