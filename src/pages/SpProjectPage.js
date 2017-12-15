import React from 'react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import ImageSection from '../components/ImageSection';
import FluidImageSection from '../components/FluidImageSection';
import FullImageSection from '../components/FullImageSection';

import PairImageSection from '../components/PairImageSection';

import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';


class SpProjectPage extends React.Component {
  render() {
    return (
      <div className="SpProjectPage">
        <MarginBottomM text>
          <Header large>
            Unifying Scalable Press web
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; 2017
          </Caption>
        </MarginBottomM>
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*dsW4EQJ99LXLgYDiDBQjzA.png"
        />
        <TextSection
          header="The Challenge"
          content={
            <div>
              <Paragraph>
                In just three years since 2014, Scalable Press had 
                evolved from a small screen print service to a 
                national fulfillment network. By 2017, 1 in 6 people 
                in the U.S. owned a shirt printed by the SF-based startup.
              </Paragraph>
              <Paragraph>
                The Scalable Press website where customers manage 
                their orders and invoices, struggled to scale 
                with the company’s rapid growth. Tacked on 
                features competed for focus and inconsistent 
                interfaces hindered future development.
              </Paragraph>
              <Paragraph>
                The redesign of Scalable Press web is 
                about creating a design system for our web experience 
                which would present all of our features as a
                powerful, quality platform.
              </Paragraph>
            </div>
          }
        />

        <TextSectionSub
          header="My role"
          content= {
            <Paragraph>
              I led the Scalable Press web app re-design from May to August 2017 to address usability issues and establish design patterns that enable future projects to be easily built with speed and quality. I owned the design process from User Research to implementation and collaborated with another designer on the Home page. In addition, I worked alongside 3 Full Stack Engineers and a Product Manager who joined near the end of the project.
            </Paragraph>
          }
        />
        <TextSection
          header="Problems with Scalable Press web"
          content= {
            <Paragraph>
              We did usability testing of Scalable Press web 
              with 10 existing users. Combined with insights from user
              and sales interviews from the past few months, we organized
              the pain points into three overarching themes to guide
              our endeavor.
            </Paragraph>
          }
        />


        <TextSectionSub
          header="1. Tangled navigation"
          content= {
            <Paragraph>
              Scalable Press is home to manual orders placed via Scalable Press web 
              and ecommerce orders flowing in from a platform such as Shopify.
              The navigation not only merges these spaces but offers no indication
              of which feature pertains to which kind of order.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*swGDvlcvS1p6EZX1mGw2Qg.png"
        />

        <TextSectionSub
          header="2. Poor information hierarchy"
          content= {
            <Paragraph>
              Users have a hard time finding what they need in a sea
              of chaotic information. The excessive levels of information and nesting
              poses additional usability issues.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*LUV63HhwKT_aoYAmmhUwKw.png"
        />
        
        <TextSectionSub
          header="3. Fragmented experience"
          content= {
            <Paragraph>
              From branding to user flows to page formatting, there is
              little consistency across our products. This 
              creates a feeling of unpredictability and poor quality. Users also
              have to relearn new rules for each feature.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*9GsmUEfp_TcoE4WBVgWUrA.png"
        />


        <TextSection
          header="Design system as a solution"
          content= {
            <div>
              <Paragraph>
                During our brainstorming sessions, we realized that
                many of the problems in Scalable Press web was the lack
                of a source of truth.
              </Paragraph>
              <Paragraph>
                We had been discussing the need for a design system
                as our list of features and products were growing.
                The Scalable Press web redesign posed an
                opportunity to drive design system creation and testing.
              </Paragraph>
              <Paragraph>
                We set out to create a roadmap to define the system’s 
                direction without drowning in detail. After 
                doing a UI inventory of Scalable Press web, 
                we organized them by importance.
              </Paragraph>
            </div>
          }
        />

        <PairImageSection
          src_left="https://cdn-images-1.medium.com/max/1600/1*Jr86I9SZR1vbXXPqcjzyxg.png"
          caption_left="Parts organized by type"
          src_right="https://cdn-images-1.medium.com/max/1600/1*u7u21buSPyIU9pcAhyZ8mQ.jpeg"
          caption_right="Parts organized by urgency"
        />

        <TextSection
          header="V1: Making it scalable and flexible"
          content= {
            <div>
              <Paragraph>
                Building a scalable and flexible design and code 
                framework that serves as the backbone of the internal 
                tools suite and allows new web projects to easily be built with speed and quality.
                Coding out the design system really forced me to think 
                in components, pruning nonessential color variations, sizes, layouts, and UI. 
              </Paragraph>
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*z-ysAt6NHM2cDwLOL-L5fQ.png"
        />
        <FluidImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*ud2Sm5eT3fCeKXwUMdc4iQ.png"
          caption="A sampling of components"
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*Thd05-8CqHiLlmxwOKGcEg.png"
          caption="Billing explorations using Design System V1"
        />

        <TextSection
          header="V2"
          content= {
            <div>
              <Paragraph>
                Insights from V1 from user testing with engineers, designers, 
                marketing was the need to know when to use what component. 
                WHEN TO USE WHAT COMPONENT???!?!?!

                While the master Sketch file was great for copying and 
                pasting assets, the interaction rules and best practices 
                for each component was still tribal knowledge within the team. 
                Soon, the design team encountered many questions around small 
                implementation details from the engineer teams, which 
                required every use case to be accounted for.

                To help design more efficiently with engineering, 
                I began working on the second version of the design 
                system which has much more detailed documentation for each UI pattern.
              </Paragraph>
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*y8Tlqeo_OrLZ7IXT2RClMA.png"
        />

        <TextSectionSub
          header="Unified Experience"
          content= {
            <div>
              <Paragraph>
                Hello
              </Paragraph>
            </div>
          }
        />

        <FluidImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*EiaGr8cULi2mnVHjThRJLQ.png"
          caption="New unified Scalable Press web experience (2017)"
        />

        <TextSectionSub
          header="Scalable and in sync"
          content= {
            <div>
              <Paragraph>
                Hello
              </Paragraph>
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*U6h81yfcujfd1sAOF0qCgQ.png"
        />

        <TextSection
          header="Things I learned"
          content= {
            <div>
              <Header small>
                1. To prioritize experience over features
              </Header>
              <Paragraph>
                A startup means you have to make hard calls. You have 
                to decide what to cut out to ship on time. 
                We learnt this balance— while still sticking to 
                quality. It worked well because people responded 
                to our difference in quality.
              </Paragraph>
            </div>
          }
        />

      </div>   
    );
  }
}

export default SpProjectPage;