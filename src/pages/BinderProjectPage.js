import React from 'react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import ImageSection from '../components/ImageSection';
import FullImageSection from '../components/FullImageSection';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import { LinkHeader } from '../components/Buttons';


class BinderProjectPage extends React.Component {
  render() {
    return (
      <div className="BinderProjectPage">
        <MarginBottomM text>
          <Header large>
            Binder: Augmented note-taking
          </Header>
          <Caption>
            Product Designer &middot; UX / UI &middot; 2013
          </Caption>
        </MarginBottomM>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*BAZsAWF2_TiNduMkoEjzcw.jpeg"
          caption=""
        />

        <MarginBottomM text>
          <Paragraph>
            Binder is an augmented note-taking app for a live event. It enables 
            real-time media capture, note customization, and event-specific 
            generated content. Binder helps users organize the 
            information and data they want to keep from each event 
            in a digestible and shareable format.
          </Paragraph>
          <Header xsmall>
            <a href="https://www.behance.net/gallery/13336431/Binder-A-Second-Screen-Tablet-Application" target="_blank" rel="noopener noreferrer">
              <LinkHeader>
                View process
              </LinkHeader>
            </a>   
          </Header>
        </MarginBottomM>
        
        <MarginBottomM text>
          <Header medium>
            The Brief
          </Header>
          <Paragraph>
            Our team was given the prompt of creating a second screen 
            mobile media app. We refined this problem through user 
            research and found that a lot of people didn't want to 
            be bothered when watching TV. We thought, when would a second 
            screen full of information and data add to the overall 
            experience? That's when we looked in conferences and lectures.
          </Paragraph>
          <Paragraph>
            We interviewed more people and many really enjoyed 
            attending conferences but felt overwhelmed by the 
            vast number of people and information thrown at them. 
            It was hard to keep track of the people they met and take 
            notes on key points they encountered. The ipad app 
            we designed, Binder, solves this problem.
          </Paragraph>
        </MarginBottomM>

        <ImageSection 
          src="https://cdn-images-1.medium.com/max/1600/1*8C8WPRFwaO9B8NiY5apWig.jpeg"
          caption="Crowded Launch Festival conference in San Francisco"
        />
        <TextSection 
          header="Final design demo"
          content={
            <div>
              <Paragraph>
                Conferences can use Binder to distribue a digital 
                "conference package" that includes the conference 
                schedule, network of conference goers, and other 
                real-time notifications. When conference goers opens 
                up Binder, he or she can select the conference 
                and add it to his or her "binders". Thus, each conference 
                or lecture is a "binder" inside our app.
              </Paragraph>
              <Paragraph>
                I collaborated with Shefani to create the following 
                mockups which demostrate real-time media capture 
                presentation syncing, several note-taking and annotation modes, 
                and robust social features. I used Marvel to prototype 
                the experience. Just click anywhere on the screen and 
                a blue field will indicate where the clickable area is.
              </Paragraph>
            </div>
          }
        />
        <MarginBottomM text>
          <iframe className="marvel" src="https://marvelapp.com/ga1g8j?emb=1" width="100%" height="600" allowtransparency="true" frameBorder="0" title="Project demo"></iframe>
        </MarginBottomM>

        <TextSectionSub
          header="Personalize Conference Schedule"
          content={
            <Paragraph>
              Conference schedule is automatically loaded onto 
              binder. User can add upcoming talks to his or her 
              personal schedule and get reminders when they are 
              about to happen.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/800/1*NGh2QP5uyo2WIiYL9OYbKw.jpeg"
          caption=""
        />

        <TextSectionSub
          header="Real-time Media Capture"
          content={
            <Paragraph>
              With wifi location syncing, Binder knows when a 
              user is attending a talk and automatically displays 
              the note-taking page that includes a live video 
              stream of the talk. When users hear something 
              interesting during the talk, they can take a short 
              clip of the live stream. Other real-time media 
              features include a live chat correlated with the 
              live stream video and visualization of when more 
              or less people are engaged during the talk.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/800/1*AJtYauxDUZJSunr-rZhi2A.jpeg"
          caption=""
        />

        <TextSectionSub
          header="Visual Information Display"
          content={
            <Paragraph>
              Display all notes, pictures video clips from the 
              conference as well those from outside research 
              on one board. Each piece of information is 
              resizable and rearrangable. Organize it the way you want!
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/800/1*MiAoIUU7ECPvuhnLVLkxWg.jpeg"
          caption=""
        />

        <TextSection
          header="Reflection"
          content={
            <div>
              <Paragraph>
                This was one of my first app designs where I 
                engaged the entire design process, focusing 
                on user research and iteration testing to define 
                and constantly adjust our approach to create a 
                truely different "second-screen" interaction.
              </Paragraph>
              <Paragraph>
                I was able to delve into the design process with 
                Binder and learned value skills in interviewing 
                users and analyzing user research, to list assumptions 
                and address each one. If we didn't do so much 
                research to understand our assumptions, we would 
                have pigeon-holed ourselves in creating a TV show 
                companion app Special thanks to Tony Sokolowski, 
                VP of Design at Vertigo, who challenged us with 
                the prompt and worked with us throughout the design 
                process and giving us tips and suggestions on 
                storyboarding and user testing.
              </Paragraph>
            </div>
          }
        />

        <TextSection
          header="Team"
          content={
            <Paragraph>
              Binder is a Fall 2013 team project within Berkeley 
              Innovation, UC Berkeley's human-centered design 
              organization, to create Binder. Team members 
              include Vandana Pai, Shefali Netke, Jason Gee, 
              and myself. We had the opportunity to work with 
              design consulting firm, Vertigo Software, Inc., 
              to create a modern second-screen tablet application. 
              Throughout our process, we focused on user research, 
              multiple iterations of wireframes and prototypes, 
              and concept generation.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*3-BYPSFL3pRPyPKf0ITEyw.jpeg"
          caption="Binder team with Tony Sokolowski, VP of Design at Vertigo, who worked with us throughout the project"
        />

        <MarginBottomM text>
          <Header xsmall>
              <a href="https://www.behance.net/gallery/13336431/Binder-A-Second-Screen-Tablet-Application" target="_blank" rel="noopener noreferrer">
                <LinkHeader>
                  View process
                </LinkHeader>
              </a>   
          </Header>
        </MarginBottomM>
      </div>
    );
  }
}

export default BinderProjectPage;