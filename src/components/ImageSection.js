import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import { SmallContentSection } from '../atoms/Spacing'; 
import { InlineCaption, CaptionHeader } from '../atoms/Typography'; 

function ImageSection(props) {
  return (
    <div className="ImageSection">
      <SmallContentSection text>
        <Image src={props.src} fluid />
      </SmallContentSection>
      <SmallContentSection text>
        <Grid>
          <Grid.Column only='tablet computer' width={2}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <InlineCaption>
              {props.caption}
            </InlineCaption>
          </Grid.Column>
        </Grid>
      </SmallContentSection>
    </div>
  );
}

function FullImageSection(props) {
  return (
    <div className="FullImageSection">
      <SmallContentSection>
        <Image src={props.src} fluid />
      </SmallContentSection>
      <SmallContentSection text>
        <Grid>
          <Grid.Column only='tablet computer' width={2}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <InlineCaption>
              {props.caption}
            </InlineCaption>
          </Grid.Column>
        </Grid>
      </SmallContentSection>
  </div>
  );
}

function PairImageSection(props) {
  return (
    <div className="PairImageSection">
      <SmallContentSection>
        <Grid>
          <Grid.Column width={8}>
            <Image src={props.src_left} fluid />
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={props.src_right} fluid />
          </Grid.Column>
        </Grid>
      </SmallContentSection>
      <SmallContentSection text>
        <Grid>
          <Grid.Column only='tablet computer' width={2}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={10} computer={10}>
            <InlineCaption>
              <CaptionHeader>
                Left / &nbsp;
              </CaptionHeader>
              {props.caption_left}
            </InlineCaption>
            <InlineCaption>
              <CaptionHeader>
                Right / &nbsp;
              </CaptionHeader>
              {props.caption_right}
            </InlineCaption>
          </Grid.Column>
        </Grid>
      </SmallContentSection>
  </div>
  );
}

        


export { ImageSection, FullImageSection, PairImageSection };