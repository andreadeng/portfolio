import React from 'react';
import { LargeHeader, MediumHeader, SmallHeader, Paragraph, Caption } from '../components/Typography';
import { ContentSection, SmallContentSection } from '../components/Spacing';

import { LinkHeader, LinkBody } from '../components/Buttons';

import { Container } from 'semantic-ui-react'; 
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router';


class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <ContentSection text>
          <Grid>
            <Grid.Column width={14}>
              <Paragraph>
                I’m a Product Designer in San Francisco 
                and have previously worked at &nbsp;
                
                <a href="https://scalablepress.com/" target="_blank">
                  <LinkBody>
                    Scalable Press
                  </LinkBody>
                </a>
                ,&nbsp;
                <a href="https://hackclub.com/" target="_blank">
                  <LinkBody>
                    Hack Club
                  </LinkBody>
                </a>
                ,&nbsp;and&nbsp;
                <a href="https://viaprograms.org/.com/" target="_blank">
                  <LinkBody>
                    VIA
                  </LinkBody>
                </a>
                .&nbsp;
                I believe in technology's potential for good and explores 
                how everyday. I use my background in cognitive psychology to design solutions
                that speak to our humanity.
              </Paragraph>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid>
        </ContentSection>

        <SmallContentSection text>
          <SmallHeader>
            Select Works
          </SmallHeader>
        </SmallContentSection>
        <ContentSection text>
          <Link to="/on-hold-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*fGZAAXYFhoKVBv_PJGbUuA.png' fluid />
            <MediumHeader>
              <LinkHeader>
                Reducing order delays
              </LinkHeader>
            </MediumHeader>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </ContentSection>

        <ContentSection text>
          <Link to="/project-page">
            <Image src='https://cdn-images-1.medium.com/max/800/1*u7u21buSPyIU9pcAhyZ8mQ.jpeg' fluid />
            <MediumHeader>
              <LinkHeader>
                Unifying Scalable Press web
              </LinkHeader>
            </MediumHeader>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </ContentSection>
        

        <ContentSection text>
          <Link to="/project-page">
            <Image src='https://cdn-images-1.medium.com/max/1000/1*b6gyJahydn-TD553zGSybg.png' fluid />
            <MediumHeader>
              <LinkHeader>
                TeeChip Dashboard
              </LinkHeader>
            </MediumHeader>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </ContentSection>
      </div>
    );
  }
}

export default HomePage;