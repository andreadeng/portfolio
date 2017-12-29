import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 

function ImageSection(props) {
  return (
    <Grid>
      <Grid.Column only='computer' width={1}>
      </Grid.Column>
      <Grid.Column mobile={16} computer={14}>
        <MarginBottomS text>
          <Image src={props.src} fluid />
        </MarginBottomS>
        <MarginBottomM text>
          <Grid>
            <Grid.Column only='computer' width={2}>
            </Grid.Column>
            <Grid.Column mobile={16} computer={12}>
              <Caption italic centered>
                {props.caption}
              </Caption>
            </Grid.Column>
            <Grid.Column only='computer' width={2}>
            </Grid.Column>
          </Grid>
        </MarginBottomM>
      </Grid.Column>
      <Grid.Column only='computer' width={1}>
      </Grid.Column>
    </Grid>
  );
}       


export default ImageSection;