import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 


function PairImageSection(props) {
  return (
    <div>
      <MarginBottomS>
        <Image src={props.src} fluid />
      </MarginBottomS>
      <MarginBottomM text>
        <Grid>
          <Grid.Column only='tablet computer' width={2}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={12}>
            <Caption italic centered>
              {props.caption}
            </Caption>
          </Grid.Column>
        </Grid>
      </MarginBottomM>
  </div>
  );
}


export default PairImageSection;