import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 


function TrioImageSection(props) {
  return (
    <div>
      <MarginBottomM>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <MarginBottomS fluid>
                <Image src={props.src_1} fluid />
              </MarginBottomS>
              <MarginBottomS fluid>
                <Grid>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={12}>
                    <Caption italic>
                      {props.caption_1}
                    </Caption>
                  </Grid.Column>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                </Grid>
              </MarginBottomS>
            </Grid.Column>

            <Grid.Column>
              <MarginBottomS fluid>
                <Image src={props.src_2} fluid />
              </MarginBottomS>
              <MarginBottomS fluid>
                <Grid>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={12}>
                    <Caption italic>
                      {props.caption_2}
                    </Caption>
                  </Grid.Column>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                </Grid>
              </MarginBottomS>
            </Grid.Column>

            <Grid.Column>
              <MarginBottomS fluid>
                <Image src={props.src_3} fluid />
              </MarginBottomS>
              <MarginBottomS fluid>
                <Grid>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                  <Grid.Column mobile={16} computer={12}>
                    <Caption italic>
                      {props.caption_3}
                    </Caption>
                  </Grid.Column>
                  <Grid.Column only='computer' width={2}>
                  </Grid.Column>
                </Grid>
              </MarginBottomS>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MarginBottomM>
    </div>
  );
}


export default TrioImageSection;