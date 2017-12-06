import React from 'react';
import { HeroHeader, LargeHeader, MediumHeader, SmallHeader, Paragraph } from '../components/Typography';
import { ContentSection } from '../components/Spacing'; 
import { Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';


class ProjectPage extends React.Component {
  render() {
    return (
      <div className="ProjectPage">
        <ContentSection>
          <Image src='https://cdn-images-1.medium.com/max/1600/1*9yLclmi2ZUSpKR50bw7t0g.png' fluid />
        </ContentSection>
        
        <ContentSection text>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <SmallHeader>The Challenge</SmallHeader>
                <Paragraph>
                  I am apart of 
                  several groups: my roommates, my dance team, 
                  that-one-project-group, etc. We use GroupMe 
                  to communicate, but, to make plans, we use 
                  an array of products like Google Forms, Facebook 
                  Polls.
                </Paragraph>
                
              </Grid.Column>
              <Grid.Column>
                <SmallHeader>My Role</SmallHeader>
                <Paragraph>
                  Like many college students, I am apart of 
                  several groups: my roommates, my dance team, 
                  that-one-project-group, etc. We use GroupMe 
                  to communicate, but, to make plans, we use 
                  an array of products like Google Forms, Facebook 
                  
                </Paragraph>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </ContentSection>

        <ContentSection text>
          <MediumHeader>Brief</MediumHeader>
          <Paragraph>
            Like many college students, I am apart of 
            several groups: my roommates, my dance team, 
            that-one-project-group, etc. We use GroupMe 
            to communicate, but, to make plans, we use 
            an array of products like Google Forms, Facebook 
            Polls, Messenger Groups, etc.
            GroupMe Events allows users to schedule 
            plans for a specific group of people. However, 
            it is hardly used because: It’s hard to find. 
            It’s hard for users to break out of their 
            usual workflows.
          </Paragraph>
        </ContentSection>
      </div>
    );
  }
}

export default ProjectPage;