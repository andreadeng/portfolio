import React from 'react';
import { Grid } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import Paragraph from './Paragraph'; 

function NumList(props) {
  return (
    <MarginBottomS text>
      <Grid>
        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            1.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_1}
          </Paragraph>
        </Grid.Column>

        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            2.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_2}
          </Paragraph>
        </Grid.Column>

        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            3.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_3}
          </Paragraph>
        </Grid.Column>

      </Grid>
    </MarginBottomS>
  );
}       


export default NumList;