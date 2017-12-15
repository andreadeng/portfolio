import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

import MarginBottomM from '../components/MarginBottomM';
import MarginBottomS from '../components/MarginBottomS';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import { LinkHeader, LinkBody } from '../components/Buttons';


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <MarginBottomM text>
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
                I believe in technology's potential for good. I use my background in cognitive and social psychology to design solutions
                that speak to our humanity.
              </Paragraph>
            </Grid.Column>
            <Grid.Column width={2}>
            </Grid.Column>
          </Grid>
        </MarginBottomM>

        <MarginBottomS text>
          <Header xsmall>
            Select Works
          </Header>
        </MarginBottomS>
        <MarginBottomM text>
          <Link to="/orders-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png' fluid />
            <Header link>
              <LinkHeader>
                Reducing order delays
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>

        <MarginBottomM text>
          <Link to="/sp-project-page">
            <Image src='https://cdn-images-1.medium.com/max/2000/1*dsW4EQJ99LXLgYDiDBQjzA.png' fluid />
            <Header link>
              <LinkHeader>
                Unifying Scalable Press web
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>
        

        <MarginBottomM text>
          <Link to="/project-page">
            <Image src='https://cdn-images-1.medium.com/max/1000/1*b6gyJahydn-TD553zGSybg.png' fluid />
            <Header link>
              <LinkHeader>
                TeeChip Dashboard
              </LinkHeader>
            </Header>
            <Caption>
              Product Designer &middot; Scalable Press &middot; 2017
            </Caption>
          </Link>
        </MarginBottomM>
      </div>
    );
  }
}

export default HomePage;