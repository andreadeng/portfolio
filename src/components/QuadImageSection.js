import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomS from './MarginBottomS'; 
import MarginBottomM from './MarginBottomM'; 
import Caption from './Caption'; 
import Span from './Span'; 

function QuadImageSection(props) {
  return (
    <div>
      <MarginBottomM>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <MarginBottomS fluid>
              <Image src={props.src_1} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column width={2}>
                  <Caption>
                    A.
                  </Caption>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Caption>
                    {props.caption_1}
                    <Span italic>
                      {props.subcaption_1}
                    </Span>
                  </Caption>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <MarginBottomS fluid>
              <Image src={props.src_2} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column width={2}>
                  <Caption>
                    B.
                  </Caption>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Caption>
                    {props.caption_2}
                    <Span italic>
                      {props.subcaption_2}
                    </Span>
                  </Caption>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={8} computer={4}>
            <MarginBottomS fluid>
              <Image src={props.src_3} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column width={2}>
                  <Caption>
                    C.
                  </Caption>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Caption>
                    {props.caption_3}
                    <Span italic>
                      {props.subcaption_3}
                    </Span>
                  </Caption>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <MarginBottomS fluid>
              <Image src={props.src_4} fluid />
            </MarginBottomS>
            <MarginBottomS fluid>
              <Grid>
                <Grid.Column width={2}>
                  <Caption>
                    D.
                  </Caption>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Caption>
                    {props.caption_4}
                    <Span italic>
                      {props.subcaption_4}
                    </Span>
                  </Caption>
                </Grid.Column>
              </Grid>
            </MarginBottomS>
          </Grid.Column>
        </Grid>
      </MarginBottomM>
    </div>
  );
}


export default QuadImageSection;