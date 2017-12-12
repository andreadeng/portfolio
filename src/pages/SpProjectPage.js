import React from 'react';

import { LargeHeader, MediumHeader, SmallHeader, Paragraph, Caption, InlineCaption, CaptionHeader, ItalicSpan, SmallPrimary } from '../atoms/Typography';
import { ContentSection, SmallContentSection } from '../atoms/Spacing'; 
import { LinkHeader, LinkBody } from '../components/Buttons';
import { TextSection, SmallTextSection } from '../components/TextSection'; 
import { ImageSection, FullImageSection, PairImageSection } from '../components/ImageSection'; 


class SpProjectPage extends React.Component {
  render() {
    return (
      <div className="SpProjectPage">
        <ContentSection text>
          <LargeHeader>
            Unifying Scalable Press web
          </LargeHeader>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; 2017
          </Caption>
        </ContentSection>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*EiaGr8cULi2mnVHjThRJLQ.png"
          caption="New unified Scalable Press web experience (2017)"
        />
        
        <SmallTextSection
          header="The Challenge"
          content={
            <div>
              <Paragraph>
                In just three years since 2014, Scalable Press has 
                evolved from a small screen print service to a 
                national fulfillment network. By 2017, 1 in 6 people 
                in the U.S. owned a shirt printed by the SF-based startup.
              </Paragraph>
              <Paragraph>
                The Scalable Press website — where customers manage 
                their orders and invoices, struggled to scale 
                with the company’s rapid growth. Tacked on 
                features competed for focus and inconsistent 
                interfaces hindered future development.
              </Paragraph>
              <Paragraph>
                The redesign of the Scalable Press web experience is 
                about creating a design system for our web experience 
                which would reorganize all of our features as an 
                accessible and powerful business platform.
              </Paragraph>
            </div>
          }
        />

        <TextSection
          header="Uncovering the problems"
          paragraph_1="
            In just three years since 2014, Scalable Press has 
            evolved from a small screen print service to a 
            national fulfillment network. By 2017, 1 in 6 people 
            in the U.S. owned a shirt printed by the SF-based startup.
          "
        />


        <SmallTextSection
          header="Chaotic navigation"
          paragraph_1="
            In just three years since 2014, Scalable Press has 
            evolved from a small screen print service to a 
            national fulfillment network. By 2017, 1 in 6 people 
            in the U.S. owned a shirt printed by the SF-based startup.
          "
        />
        
        <SmallTextSection
          header="Fragmented UI"
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*QZyAybItGCvKq-Uxx7aGVA.png"
        />

        <SmallTextSection
          header="Poor visual hierarchy"
          paragraph_1="
            Little emphasize on important info and deemphasis on less important. Very flat and concentrated information.
          "
        />

      </div>
    );
  }
}

export default SpProjectPage;