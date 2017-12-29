import React from 'react';
import { Grid } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import Paragraph from './Paragraph'; 

function NumList6(props) {
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

        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            4.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_4}
          </Paragraph>
        </Grid.Column>

        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            5.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_5}
          </Paragraph>
        </Grid.Column>

        <Grid.Column textAlign='center' mobile={2} tablet={1} computer={1}>
          <Paragraph> 
            6.
          </Paragraph>
        </Grid.Column>
        <Grid.Column mobile={14} tablet={15} computer={15}>
          <Paragraph> 
            {props.content_6}
          </Paragraph>
        </Grid.Column>

      </Grid>
    </MarginBottomS>
  );
}       


export default NumList6;