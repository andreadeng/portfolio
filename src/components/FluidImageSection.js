import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 


function FluidImageSection(props) {
  return (
    <div>
      <MarginBottomS fluid>
        <Image src={props.src} fluid />
      </MarginBottomS>
      <MarginBottomM text>
        <Grid>
          <Grid.Column only='tablet computer' width={2}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Caption italic centerA>
              {props.caption}
            </Caption>
          </Grid.Column>
        </Grid>
      </MarginBottomM>
  </div>
  );
}


export default FluidImageSection;