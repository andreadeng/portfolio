import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 


function PairImageSection(props) {
  return (
    <div>
      <MarginBottomM>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <MarginBottomS fluid>
              <Image src={props.src_left} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column only='computer' width={2}>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                  <Caption italic>
                    {props.caption_left}
                  </Caption>
                </Grid.Column>
                <Grid.Column only='computer' width={2}>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={8}>
            <MarginBottomS fluid>
              <Image src={props.src_right} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column only='computer' width={2}>
                </Grid.Column>
                <Grid.Column mobile={16} computer={12}>
                  <Caption italic>
                    {props.caption_right}
                  </Caption>
                </Grid.Column>
                <Grid.Column only='computer' width={2}>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>
        </Grid>
      </MarginBottomM>
    </div>
  );
}


export default PairImageSection;