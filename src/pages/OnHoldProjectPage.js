import React from 'react';
import { LargeHeader, MediumHeader, SmallHeader, Paragraph, Caption } from '../components/Typography';
import { ContentSection } from '../components/Spacing'; 
import { Grid } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';


class ProjectPage extends React.Component {
  render() {
    return (
      <div className="ProjectPage">
        <ContentSection text>
          <LargeHeader>
            Reducing order delays
          </LargeHeader>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; 2017
          </Caption>
        </ContentSection>

        <ContentSection>
          <Image src='https://cdn-images-1.medium.com/max/2000/1*fGZAAXYFhoKVBv_PJGbUuA.png' fluid />
        </ContentSection>
        
        <ContentSection text>
          <Grid>
            <Grid.Column only='tablet computer' width={4}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <MediumHeader>
                The Challenge
              </MediumHeader>
              <Paragraph>
                Scalable Press is a San Francisco based fulfillment 
                startup revolutionizing the printing industry.
              </Paragraph>
              <Paragraph>
                Our users biggest pain point was not knowing where their order was.
                Current order status information on the dashboard was 
                incomplete and inaccurate. Users often 
                hear about order delays from their angry customers asking, “ WHERE IS MY ORDER?!?!”
                I led the project to surface order status information to users and reduce delayed orders 
                spanning between May and August 2017.
              </Paragraph>
            </Grid.Column>
          </Grid>
        </ContentSection>

        <ContentSection text>
          <Image src='https://cdn-images-1.medium.com/max/2000/1*Obi0br-pktuxFOdzoreccQ.jpeg' fluid />
        </ContentSection>

        <ContentSection text>
          <Grid>
            <Grid.Column only='tablet computer' width={4}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={12}>
              <MediumHeader>
                Initial Exploration
              </MediumHeader>
              <Paragraph>
                I first set out to identifying when an order issue could occur and whether 
                issue notifications should exist as a feature on Orders page. After 
                testing a paper prototype of On-page notifications, I learned that 
                users were actually very annoyed by them. Users had hundreds of orders 
                being fulfilled at a time and were annoyed by the constant notifications 
                about order updates. Notifications also took up a lot of vertical space, 
                obscuring the list of orders. Therefore, there was a need to organize 
                notifications in a digestible way that promotes action.
              </Paragraph>
            </Grid.Column>
          </Grid>
        </ContentSection>

        <ContentSection>
          <Image src='https://cdn-images-1.medium.com/max/2000/1*xE6XFfFysdTrAred0ESmVg.png' fluid />
        </ContentSection>

      </div>
    );
  }
}

export default ProjectPage;