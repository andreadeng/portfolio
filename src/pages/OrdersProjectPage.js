import React from 'react';
import { Grid } from 'semantic-ui-react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import NumList from '../components/NumList'; 
import ImageSection from '../components/ImageSection';
import QuadImageSection from '../components/QuadImageSection'; 
import FullImageSection from '../components/FullImageSection';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import Span from '../components/Span';
import { LinkBody } from '../components/Buttons';


class OrdersProjectPage extends React.Component {
  render() {
    return (
      <div className="OrdersProjectPage">
        <MarginBottomM text>
          <Header large>
            Reducing order delays
          </Header>
          <Caption>
            Lead Product Designer &middot; UX / UI / Front-end &middot; 2017
          </Caption>
        </MarginBottomM>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*aSmelP-NN3O_i4uaQ2mBbA.png"
          caption="New order on hold workflow (2017)"
        />

        <MarginBottomM text>
          <Header medium>
            The Brief
          </Header>
          <Paragraph>
            <a href="https://scalablepress.com/" target="_blank" rel="noopener noreferrer">
              <LinkBody>
                Scalable Press
              </LinkBody>
            </a>
            &nbsp;is a San Francisco based fulfillment startup revolutionizing 
            the printing industry. Scalable Press web streamlines the 
            fulfillment process for users from placing orders to paying 
            invoices. However, it became increasingly clear through user 
            research that something was missing from this experience.
          </Paragraph>
          <Paragraph>
            We learned that behind customer inquiries of the order 
            status was a bigger problem. The problem was users were 
            unaware of order issues such as low resolution artwork or 
            incorrect print colors until they learned that their order 
            was delayed. By that time, not only was it too late to fix 
            the issue, there was no system in place for users to make 
            changes to the order. The goal of building the On Hold System 
            was to reduce order delays by catching issues early in 
            the process and enabling users to fix them. 
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            My role and constraints
          </Header>
          <Paragraph>
            I led the design process end-to-end. I uncovered the 
            problem we were solving, worked with the PM to identify 
            the goal and scope of the project, and collaborated with 
            2 engineers early on. I also worked with the stakeholders, 
            sales reps, the VP of sales, engineering, and PM, 
            throughout to uncover more about user needs.
          </Paragraph>
          <Paragraph>
            This project was given a tight timeline of 2 months 
            from user research to release. In addition, there was 
            no existing design language as the team was simultaneously 
            building the Scalable Press Design System. Given the 2 
            month timeline, the engineers had to begin implementation 
            as I was working on the third iteration of the solution.
          </Paragraph>
        </MarginBottomM>
        
      
        <TextSection 
          header="Making Events Feed more detailed"
          content={
            <div>
              <Paragraph>
                Collaborating with the sales team enabled me to learn 
                as much as possible about user needs. I spent a whole 
                day at the Fremont sales office, talking to all 12 
                sales reps. By doing so, I learned that the biggest 
                customer inquiry was “Where is my order?” In fact, 
                according to our April 2017 customer inquiry report 
                of 48% of customer inquiries were asking what the order 
                status was, 27% was asking to change the shipping address 
                or method, and only 20% was to price quoting, 5% other. 
                This was my starting point for user research.
              </Paragraph>
              <Paragraph>
                My initial hypothesis was:&nbsp;
                <Span primary italic strong>
                  “If we made the Events Feed feature more granular, 
                  users would use it to inform their customers.”&nbsp; 
                </Span>
                I thus set out to discover why users didn’t use the Events 
                Feed and what they used instead.
              </Paragraph>
            </div>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*1sFbhWpawMburda92xUfFQ.png"
          caption="Current Events Feed feature"
        />

        <TextSectionSub
          header="Research uncovered a bigger problem"
          content={
            <div>
              <Paragraph>
                Our two main users are sales reps from promotional 
                product companies and online store owners. I included 
                the PM to interview 10 users from each group with me 
                and learned:
              </Paragraph>
            </div>
          }
        />

        <NumList 
          content_1="Users don't use Events Feed because they have hundreds of
          orders being fulfilled at a time and can't check them all."
          content_2="Our sales team sends regular reports to larger clients about 
          their order delay reasons so they can resolve them."
          content_3="Users contact sales reps about delayed orders to expedite them."
        />

        <MarginBottomM text>
          <Paragraph>
            After asking the engineers to do a data query of reasons for 
            order delays, I also learned that 80% of the issues could 
            be caught and resolved early. Thus, I learned my initial 
            hypothesis was incorrect. I learned that preventing order 
            delays was more important than being informed about them. 
          </Paragraph>
        </MarginBottomM>

        <TextSection 
          header="Brainstorming"
          content={
            <div>
              <Paragraph>
                With that in mind, I recruited the engineers and VP of Sales 
                to brainstorm together.
              </Paragraph>
            </div>
          }
        />

        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*Obi0br-pktuxFOdzoreccQ.jpeg"
          caption="Categorizing our brainstorm"
        />        

        <TextSection
          content={
            <div>
              <Paragraph>
                After brainstorming, I identified the following opportunity:
              </Paragraph>
              <Header small branded>
                How might we incorporate an issue resolution flow during the fulfillment process?
              </Header>
            </div>
          }
        />

        <MarginBottomM text>
          <Header medium>
            Feedback early and often
          </Header>
        </MarginBottomM>

        <TextSectionSub
          header="Initial exploration"
          content={
            <Paragraph>
              I first set out to identify whether the issue resolution flow should exist  
              as a feature within Orders. I created a paper prototype to test my approach.
            </Paragraph>
          }
        />
        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*kz2gxTxumq-eTA1Y1SiC0Q.gif"
          caption="Paper prototype of issue resolution in Orders"
        />
        <MarginBottomM text>
          <Paragraph>
            I learned that issue resolution on the Orders page was intrusive. 
            It took up a lot of vertical space, obscurring the orders list
            especially when the list of issues grew. Resolving issues and 
            viewing orders requires different intentions but were inappropriately 
            fused in the same view. Separated from the order it referenced, each issue message did not 
            provide enough context for users to take action. As a result, I decided to I explored ways to present 
            issue resolution in its order context.
          </Paragraph>
        </MarginBottomM>

        <TextSectionSub
          header="Exploring order issues in context"
          content={
            <Paragraph>
            </Paragraph>
          }            
        />

        <QuadImageSection
          src_1="https://cdn-images-1.medium.com/max/1200/1*fR3su7IUNuvfMEVWPhHq1g.png"
          caption_1="Issue resolution as separate section "
          subcaption_1="(Heavy since large emphasis on issues)"

          src_2="https://cdn-images-1.medium.com/max/1200/1*NwFV3C5lCFnI9vaIg2kjzg.png"
          caption_2="Issue resolution as collapsible section "
          subcaption_2="(More separation between order details and issue)"

          src_3="https://cdn-images-1.medium.com/max/1200/1*FvXc0Dlv1bJnFHi1ALbBsg.png"
          caption_3="Issue resolution within order details "
          subcaption_3="(More integrated with page)"

          src_4="https://cdn-images-1.medium.com/max/1200/1*5T1T2gmsHihWCGTC1kB7NA.png"
          caption_4="Issue resolution as modal "
          subcaption_4="(Light since separated from rest of page)"
        />
        

        <MarginBottomM text>
          <Paragraph>
            I first tested a prototype of (B) which presents order issues 
            as separate part of the page with expandable sections of 
            more information. However, after testing the prototype 
            with 5 of our users, I learned that it was not prominent 
            enough and felt disconnected from the affected products. 
            After further critique from the other product designer and 
            PM, I decided to test a prototype of (D) which proved to better 
            communicate which issue affected which products, something I 
            didn’t realize was important for users initially. However, it 
            was not clear to users that “View details” will allow them to 
            fix the issue. I looked into clearly communicating how users 
            can fix orders in later iterations.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <iframe src="https://marvelapp.com/2a6f17f?emb=1" width="100%" 
            height="500px" allowtransparency="true" frameBorder="0"
            title="Medium fidelity prototype demo">
          </iframe>
          <Caption italic centered>
            Medium fidelity prototype of (D) from above explorations
          </Caption>
        </MarginBottomM>


        <TextSection 
          header="Introducing On hold system"
          content={
            <div>
              <Paragraph>
                For the On Hold System, I’ve added an “In review” 
                step to the fulfillment process to catch issues early on. Orders that 
                pass the review process will enter fulfillment and orders with issues will 
                be marked "On Hold".
              </Paragraph>
              <Paragraph>
                The final interaction includes a nonintrusive but clear 
                indication of orders with issues with the use of "On Hold" 
                and "Partially On Hold" status labels. The On Hold issue is also 
                introduced in context of which part of the order is affected. 
                This way, users can see at first glance, what the issue is 
                and which products are affected. Additional new features 
                such as the ability to edit the shipping address 
                and method gives users a sense of flexibility and control when 
                handling order issues.
              </Paragraph>
              <Paragraph>
                The new On Hold System was also the first new feature to use the 
                Scalable Press Design System.
              </Paragraph>
            </div>
          }
        />

        <MarginBottomM>
          <Grid>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={12} computer={14}>
              <iframe width="100%" height="550" 
                src="https://www.youtube.com/embed/h0qEgbATAp8?rel=0&amp;showinfo=0" 
                frameBorder="0" gesture="media" allow="encrypted-media" 
                allowFullScreen
                title="Final prototype demo">
              </iframe>
            </Grid.Column>
            <Grid.Column only='tablet computer' width={1}>
            </Grid.Column>
          </Grid>
          <Caption italic centered>
            Final prototype of On Hold System on stage 
          </Caption>
        </MarginBottomM>


        <TextSection
          header="Results and future"
          content={
            <Paragraph>
              After launching the On Hold system, order delays decreased 
              by 30%. Our sales team also shared positive user feedback 
              with us regarding the new system.  In the future, we will 
              also be looking into other opportunities to create value 
              for users that we didn’t have time to dive into for this 
                project such as preventing orders issues at the time of 
              placing the order and better illustrating improved turnaround 
              times to users.
            </Paragraph>
          }
        />

        <TextSection
          header="Learnings"
          content={
            <Paragraph>
              From this project, I learned how important it is to 
              ask the right questions before diving into design. 
              Instead of just improving the Events Feed feature, 
              we provided greater value to users by reducing the 
              number of delayed orders. Involving engineers, sales, 
              and PM early on was also crucial in understanding 
              technical constraints and business goals upfront and 
              exploring a variety of solutions. I learned that stakeholders 
              can be a great resource for user needs if I filter through 
              biased perspectives. I also learned that hustling to get 
              feedback early and often reduces time working in the wrong 
              direction. This is what enabled us to launch the system 
              in 2 months time and see immense success.
            </Paragraph>
          }
        />
      </div>
    );
  }
}

export default OrdersProjectPage;