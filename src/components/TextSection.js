import React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';

import { ContentSection } from '../atoms/Spacing'; 
import { MediumHeader, SmallHeader, Paragraph } from '../atoms/Typography';

function TextSection(props) {
  return (
    <div className="TextSection">
      <ContentSection text>
        <Grid>
          <Grid.Column only='tablet computer' width={0}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={16}>
            <MediumHeader>
              {props.header}
            </MediumHeader>
            {props.content}
          </Grid.Column>
        </Grid>
      </ContentSection>
    </div>
  );
}

function SmallTextSection(props) {
  return (
    <div className="SmallTextSection">
      <ContentSection text>
        <Grid>
          <Grid.Column only='tablet computer' width={0}>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={12} computer={16}>
            <SmallHeader>
              {props.header}
            </SmallHeader>
            {props.content}
          </Grid.Column>
        </Grid>
      </ContentSection>
    </div>
  );
}

export { TextSection, SmallTextSection };