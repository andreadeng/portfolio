import React from 'react';
import { HeroHeader, LargeHeader, MediumHeader, SmallHeader, Paragraph } from '../components/Typography';
import { ContentSection } from '../components/Spacing'; 
import { Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <ContentSection>
          <MediumHeader>Andrea Deng</MediumHeader>
          <Grid>
            <Grid.Column width={10}>
              <SmallHeader secondary light>
                I’m a Product Designer currently traveling around the Bay Area and learning about other people’s stories, dreams, and challenges. I previously worked for 1.5 years at Scalable Press, a print and fulfillment startup in San Francisco and left the company this September. &nbsp;
                <Link to="/about">
                  Read more
                </Link>
              </SmallHeader>
            </Grid.Column>
          </Grid>
        </ContentSection>

        <ContentSection>
          <LargeHeader>
            Case Studies
          </LargeHeader>
        </ContentSection>

        <ContentSection>
          <Grid>
            <Grid.Column width={6}>
              <MediumHeader>
                Scalable Press Redesign
              </MediumHeader>
              <Paragraph>
                In just three years since 2014, Scalable Press evolved from a small screen print service to a national fulfillment network. By 2017, the SF-based startup had over 200,000 square feet of fulfillment capacity in its 5 facilities across the U.S.
              </Paragraph>
              <Paragraph>
                <Link to="/project-page">
                  View case study
                </Link>
              </Paragraph>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src='https://cdn-images-1.medium.com/max/1600/1*9yLclmi2ZUSpKR50bw7t0g.png' fluid />
            </Grid.Column>
          </Grid>
        </ContentSection>

        <ContentSection>
          <Grid>
            <Grid.Column width={6}>
              <MediumHeader>
                TeeChip Dashboard
              </MediumHeader>
              <Paragraph>
                TeeChip is a platform for selling custom products by leveraging crowd funding and social media. Users launch campaigns to sell custom products and TeeChip handles the production and distribution of the products, as well as the customer service associated with any order placed on their site.
              </Paragraph>
              <Paragraph>
                <Link to="/project-page">
                  View case study
                </Link>
              </Paragraph>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src='https://cdn-images-1.medium.com/max/1000/1*b6gyJahydn-TD553zGSybg.png' fluid />
            </Grid.Column>
          </Grid>
        </ContentSection>

        <ContentSection>
          <Grid>
            <Grid.Column width={6}>
              <MediumHeader>
                Creating a design language
              </MediumHeader>
              <Paragraph>
                After working with engineering to create design consistency with the TeeChip re-design, we needed an efficient way to apply design principles to our other products and future brands.
              </Paragraph>
              <Paragraph>
                <Link to="/project-page">
                  View case study
                </Link>
              </Paragraph>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src='https://cdn-images-1.medium.com/max/800/1*u7u21buSPyIU9pcAhyZ8mQ.jpeg' fluid />
            </Grid.Column>
          </Grid>
        </ContentSection>

      </div>
    );
  }
}

export default HomePage;