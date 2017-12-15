import React from 'react';

import MarginBottomM from '../components/MarginBottomM';
import TextSection from '../components/TextSection'; 
import TextSectionSub from '../components/TextSectionSub'; 
import ImageSection from '../components/ImageSection';
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

        <TextSectionSub
          header="The Challenge"
          content={
            <div>
              <Paragraph>
                <a href="https://scalablepress.com/" target="_blank">
                  <LinkBody>
                    Scalable Press
                  </LinkBody>
                </a>
                &nbsp; is a San Francisco based fulfillment 
                startup revolutionizing the printing industry. Scalable Press 
                web powers users to take control of their custom printing business.
              </Paragraph>
              <Paragraph>
                However, users' biggest frustration with the platform
                was inaccurate and incomplete order status information. Users often 
                hear about order delays from their angry customers.
                I led the project to surface order status information to 
                users and reduce delayed orders 
                spanning between May and August 2017.
              </Paragraph>
            </div>
          }
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/2000/1*IL66pt7fhcHuoR0JIh0v2g.jpeg"
          caption="Team visit to our Indiana facility to understand the behind-the-scenes fulfillment process"
        />

        <TextSection 
          header="Discovering what was behind order status"
          content={
            <div>
              <Paragraph>
                My initial hypothesis was:&nbsp;
                <Span italic>
                  “If we made the Order status 
                  prominent and comprehensive, users could use 
                  that information to take pertinent actions.” &nbsp; 
                </Span>
                A dozen user interviews later,
                we learned this was false.
              </Paragraph>
              
              <Paragraph>
                We discovered users wanted to know more than when 
                orders were delayed. They wanted to know why,
                how they could fix it, and how to prevent it in the future.
                After doing a data query of order delays, we also realized 
                most order issues could be caught early.
              </Paragraph>
              <Paragraph>
                I recruited the engineers, Director of Customer Service to
                brainstorm together.
              </Paragraph>
            </div>
          }
        />
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1200/1*EW3qR3352dv5M_6ymei-7w.jpeg"
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1200/1*1MZQ08U2ltuhotRDiUCahg.jpeg"
        />
        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*J2NKYsrN_4mxMbCEymCanA.jpeg"
          caption="Affinity map of user interview insights"
        />

        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*Obi0br-pktuxFOdzoreccQ.jpeg"
          caption="Categorizing our brainstorm"
        />

        <TextSection
          content={
            <div>
              <Paragraph>
                After brainstorming, we identified the following opportunity:
              </Paragraph>
              <Header small>
                How might we form an issue resolution workflow that minimizes effort and saves time?
              </Header>
            </div>
          }
        />

        <TextSectionSub
          header="Initial Exploration"
          content={
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
          }
        />

        <ImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*a-rlc8rUR9dqTjE0ad9c-A.png"
          caption="Sketches of life of an order"
        />
        
        <TextSectionSub 
          header="Making notifications actionable"
          content={
            <Paragraph>
              After testing medium fidelity prototypes of “Bundled 
              notification” and “Order cards”, we learned that adding 
              an “On hold” status to orders was highly effective. We iterated 
              and tested more prototypes in this direction.
            </Paragraph>
          }            
        />
       
        <FullImageSection 
          src="https://cdn-images-1.medium.com/max/2000/1*xE6XFfFysdTrAred0ESmVg.png"
          caption="Explorations on making notifications actionable"
        />

        <TextSection 
          header="Introducing On hold system"
          content={
            <Paragraph>
              With the new On Hold System, some orders will be marked 
              “On hold” or or “Partially on hold” meaning we caught an 
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
              On hold” packages are not fulfilled 
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
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*KBbZf8IIC0r-TsZ1xoVUFw.gif"
          caption="Hold issue indicates what orders are affected"
        />

        <TextSectionSub 
          header="Flexible and forgiving"
        />

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*hYok_ci2x33G8H8SSuxciA.gif"
          caption="Variety of options to expedite an order"
        />        

      </div>
    );
  }
}

export default OrdersProjectPage;