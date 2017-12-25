import React from 'react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import NumList from '../components/NumList'; 
import ImageSection from '../components/ImageSection';
import PairImageSection from '../components/PairImageSection';
import TrioImageSection from '../components/TrioImageSection'; 
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
          src="https://cdn-images-1.medium.com/max/2000/1*fGZAAXYFhoKVBv_PJGbUuA.png"
          caption="New order on hold workflow (2017)"
        />

        <MarginBottomM text>
          <Paragraph>
            <a href="https://scalablepress.com/" target="_blank">
              <LinkBody>
                Scalable Press
              </LinkBody>
            </a>
            &nbsp; is a San Francisco based fulfillment 
            startup revolutionizing the printing industry. Users use Scalable Press 
            web to place custom orders and pay invoices. However, the  
            Order status provided on the website is inaccurate and incomprehensive and 
            users learn about order delays from angry customers. 
            Our original approach was to provide users with comprehensive 
            order status updates. After user research and testing, however, we 
            saw a larger opportunity in building an 
            Order on hold and resolution flow to reduce order delays.
          </Paragraph>
        </MarginBottomM>
        
        
        <TextSection 
          header="Making Events Feed more detailed"
          content={
            <div>
              <Paragraph>
                The current Events Feed feature allows users to see where an order is 
                in the fulfillment process but isn't used because it's incomprehensive.
                My initial hypothesis was:&nbsp;
                <Span primary italic strong>
                  “If we made the Events Feed feature more granular, 
                  users would use it to inform their customers about order status.” &nbsp; 
                </Span>
                I thus set out to discover why users didn’t use the Events Feed and what they used instead.
              </Paragraph>
            </div>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*1sFbhWpawMburda92xUfFQ.png"
          caption="Current Events Feed feature"
        />

        <TextSectionSub
          header="Understanding why Events Feed doesn't work"
          content={
            <div>
              <Paragraph>
                Our two main users are sales reps from promotional product 
                companies and online store owners.
                I interviewed 10 users from each group and learned:
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
            After doing a data query of order delays, we also realized 
            most order issues could be caught early.
          </Paragraph>
        </MarginBottomM>

        <TextSection 
          header="Brainstorming"
          content={
            <div>
              <Paragraph>
                My initial hypothesis was incorrect. I learned that 
                preventing order delays was a bigger pain point than 
                being informed about them.
                With that in mind, I recruited the engineers and Director of Customer Service to
                brainstorm.
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

        <TextSection
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

        <TextSection 
          header="Putting order issues in context"
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
          <iframe src="https://marvelapp.com/12b0b7bg?emb=1" width="100%" 
            height="500px" allowTransparency="true" frameborder="0">
          </iframe>
          <Caption italic centered>
            Medium fidelity prototype of (B) from above explorations
          </Caption>
        </MarginBottomM>

        <MarginBottomM text>
          <Paragraph>
            After testing out a prototype, I learned that having issue resolution on the order details page 
            was more intuitive for users and in line with current workflow. However, 
            there was disconnect between issue and the affected part of the order. After feedback and critique, 
            I decided to test a prototype of (C), which proved to better integrate with users' existing workflow.
          </Paragraph>
        </MarginBottomM>


        <TextSection 
          header="Introducing On hold system"
          content={
            <Paragraph>
              With the new On Hold System, some orders will be marked 
              “On hold” or “Partially on hold” meaning we caught an 
              issue with the package. “On hold” packages are not fulfilled 
              unless the issues are resolved. This reduces the 
              percentage of late orders and offloads work from sales 
              to customers to make the changes necessary for the 
              hold to be removed.
            </Paragraph>
          }
        />

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*fGZAAXYFhoKVBv_PJGbUuA.png"
          caption="Efficient on hold system"
        />

        <TextSectionSub 
          header="Consolidated and organized"
          content={
            <Paragraph>
              "On hold” packages are not fulfilled 
              unless the issues are resolved. This reduces the 
              percentage of late orders and offloads work from sales 
              to customers.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*S3OZMogmqzsETb_oBAUJ2w.gif"
          caption="Efficient on hold system"
        />
  
        <TextSectionSub 
          header="Guiding and obvious"
          content={
            <Paragraph>
              The modal provides detailed information regarding what the 
              issue is and how to resolve it. It also indicates what orders are affected by the 
              On Hold issue, if applicable.
            </Paragraph>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*KBbZf8IIC0r-TsZ1xoVUFw.gif"
          caption="Hold issue indicates what orders are affected"
        />

        <TextSectionSub 
          header="Flexible and forgiving"
          content={
            <Paragraph>
              Users now have the ability to edit shipping address, method directly on the 
              website. This eliminates order delays related to incorrect shipping addresses and 
              provides users options to expedite the shipping method for the order to 
              arrive earlier.
            </Paragraph>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*hYok_ci2x33G8H8SSuxciA.gif"
          caption="Variety of options to expedite an order"
        />        

        <TextSection
          header="Results and Reflection"
          content={
            <Paragraph>
              After launching the On Hold system, order delays decreased by 
              30%. Our sales team also shared with us the positive 
              feedback they received from customers regarding the new system. 
              From this project, I learned how important it is to ask the right questions 
              before diving into design. Instead of just improving the Order status feature, 
              we provided greater value to users by reducing the number 
              of delayed orders. Involving engineers, sales, and PM 
              early on was also crucial in understanding technical constraints and
              business goals upfront and exploring a variety of solutions. This 
              is what enabled us to launch the system in 2 months time and see 
              immense success.
            </Paragraph>
          }
        />
      </div>
    );
  }
}

export default OrdersProjectPage;