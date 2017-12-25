import React from 'react';

import MarginBottomS from '../components/MarginBottomS';
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
          src="https://cdn-images-1.medium.com/max/2000/1*qJ1Wh8wo97axeJQ1x9WvzQ.png"
        />
        <TextSection
          header="The Challenge"
          content={
            <div>
              <Paragraph>
                In just three years since 2014, Scalable Press had 
                evolved from a small screen printer to a 
                national fulfillment network. By 2017, 1 in 6 people 
                in the U.S. owned a shirt printed by the SF-based fulfillment startup. 
                However, our online platform struggled to scale 
                with the company’s rapid growth.
              </Paragraph>
              
              <Paragraph>
                I led the redesign of Scalable Press web from May to 
                August 2017, creating a design system to present all of our 
                features as a powerful, quality platform. 
                I collaborated with another Product Designer, 3 Full Stack Engineers, 
                and a Product Manager. 
              </Paragraph>
            </div>
          }
        />

        <TextSection
          header="Problems with Scalable Press web"
          content= {
            <Paragraph>
              We organized the pain points discovered through usability testing
              into three overarching themes.
            </Paragraph>
          }
        />


        <TextSectionSub
          header="Tangled navigation"
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
          src="https://cdn-images-1.medium.com/max/2000/1*6v6VJSuCJyzBbIkUK7W_vg.png"
        />

        <TextSectionSub
          header="Poor information hierarchy"
          content= {
            <Paragraph>
              Users have a hard time finding what they need in a sea
              of chaotic information. The excessive levels of information and nesting
              poses additional usability issues.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*yb-ImGspZVfa_04RuDsgbA.png"
        />
        
        <TextSectionSub
          header="Fragmented experiences"
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
          src="https://cdn-images-1.medium.com/max/2000/1*hnvT9lTmmcbslBXNkBaESg.png"
        />


        <TextSection
          header="Design system as a solution to a bigger problem"
          content= {
            <div>
              <Paragraph>
                During our brainstorming sessions, we realized
                the need to unify not only existing features but also future ones.
                Our products were currently built using Semantic UI, 
                a front-end framework that quickly got sites
                up and running but became a nightmare 
                to customize to our growing needs.
              </Paragraph>
              <Paragraph>
                After researching and testing out other frameworks, 
                it was clear there was no flexible framework.
                We needed to build our own but did not 
                have the bandwidth to tackle it all at once. 
                Instead, we created a roadmap to gradually move off Semantic UI. 
                The Scalable Press web redesign was an
                opportunity to drive the creation and testing of the
                Scalable Press design system. Instead, define the goals of your system, its target audience, and your MVP.
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
          header="Working backwards from app-level solutions"
          content= {
            <Paragraph>
              Building the framework while building the products that would use 
              it helped us test and shape the design system. The continuous cycle of specific 
              app-level solutions informing our framework-level 
              decisions enabled us to explore all the boundaries of our system 
              the deeper we got into the products.
            </Paragraph>
          }
        />

       
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*Br8IKnpSt_zaYt_OKCUpLg.png"
          caption="Evolution of Scalable Press web iterations from top to bottom"
        />

        <TextSectionSub
          header="Initial take on a design system"
          content= {
            <div>
              <Paragraph>
                To optimize for speed, I coded out the basic patterns needed for 
                Scalable Press web using Semantic UI. This helped me understand 
                which parts of Semantic UI we relied on.
              </Paragraph>
            </div>
          }
        />

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*YsZItjaK3De4TMQYWKIchQ.png"
          caption="Design system V1"
        />


        <TextSection
          header="V2: Utility Classes"
          content= {
            <div>
              <Paragraph>
                The first elements to move off of Semantic UI was spacing and 
                responsive typography. We created utility classes of our spacing sizes 
                and font-sizes to combat the Semantic UI margin/padding variations 
                in a consistent and clean way.                
              </Paragraph>
              
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*Kwi8a7Lm7DQ5drGY6Xrc3Q.png"
        />

        <TextSection
          header="V3: Detailed documentation"
          content= {
            <div>
              <Paragraph>
                While the master Sketch file and 
                utility classes created some standardization, the interaction rules 
                and best practices for each component was still tribal knowledge.                
              </Paragraph>
              <Paragraph>
                To help design more efficiently with engineering, 
                I began working on the third version of the design 
                system which has much more detailed documentation for each UI pattern.
              </Paragraph>
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*bxvKRkf_Xrosk222ad6obQ.png"
          caption="Button pattern overview"
        />
        

        <MarginBottomS text>
          <Header medium>
            Introducing the new Scalable Press 
          </Header>
        </MarginBottomS>
        
        <MarginBottomS text>
          <Header small>
            Streamlined navigation
          </Header>
        </MarginBottomS>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*Qb1yvPB4slX_8Ju9OeEixQ.png"
          caption="New navigation pattern (2017)"
        />
         
        
        <TextSectionSub
          header="Strengthened visual hierachy"
          content= {
            <div>
              <Paragraph>
                We strengthened visual hierarchy, clearly emphasizing important 
                information such as “order number” and “estimated ship date”. 
                Available actions such as “Track package” and editing the shipping 
                address/method are also easily distinguishable. Order details 
                such as the back print, size, and quantity are quick to find 
                at a glance and not cluttered.
              </Paragraph>
            </div>
          }
        />

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*HWr4ZZj3Hq9ZVRgANAN4KA.png"
          caption="Strengthened visual hierarchy (2017)"
        />
        <TextSectionSub
          header="Unified Experience"
          content= {
            <div>
              <Paragraph>
                Our extensive set of visual and interaction patterns 
                made the learning curve easier with each additional product. Consistent 
                layout, typescale, colors, interaction patterns contributed to a calm rhythm that
                helped users focus.
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
                As we added more to our design system, we were able to spend less time 
                cranking out pixel perfect mocks and more time collorating to solve bigger problems.
              </Paragraph>
            </div>
          }
        />
        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*U6h81yfcujfd1sAOF0qCgQ.png"
        />

        <TextSection
          header="Results and Reflection"
          content= {
            <div>
              <Paragraph>
                The component libraries enabled designers to create mocks in a 
                third of the time, enabling us to focus
                product problems as opposed to fixing color discrepancies. 
                Now with resuable components and utility classes, engineers 
                could accurate implement design specs and spent half the time doing so. 
                Members of engineering, design, and even marketing 
                came up to me to indicate how much time the design system had saved them.
                They also felt motivated knowing they are working on building 
                a cohesive experience.
              </Paragraph>
              <Paragraph>
                This project demonstrated how we could build a better product 
                in shorter amount of time by working collaboratively. 
                This was especially true as there
                were so many different stakeholders.
                While there was a lot of cross-department collaboration 
                in the ideation, prototyping, and implementation phases, 
                it would have been beneficial for other team members to 
                conduct usability testing. In the future, I want to bring 
                engineering and design closer by having engineers participate 
                in user research from the start. This would help build 
                empathy for the users, the problem, and the design team 
                and greater ownership in the product.
              </Paragraph>
            </div>
          }
        />

      </div>   
    );
  }
}

export default SpProjectPage;