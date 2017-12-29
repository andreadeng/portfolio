import React from 'react';

import MarginBottomM from '../components/MarginBottomM';
import NumList6 from '../components/NumList6'; 
import ImageSection from '../components/ImageSection';
import PairImageSection from '../components/PairImageSection';
import FullImageSection from '../components/FullImageSection';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';

class YumiProjectPage extends React.Component {
  render() {
    return (
      <div className="YumiProjectPage">
        <MarginBottomM text>
          <Header large>
            Yumi: Eat together
          </Header>
          <Caption>
            Project Lead &middot; UX / UI &middot; 2016
          </Caption>
        </MarginBottomM>

        <FullImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*1FIQk3-YHKlvoxEG_MsI3g.jpeg"
          caption=""
        />

        <MarginBottomM text>
          <Paragraph>
            YUMI is a mobile app that helps you find someone 
            nearby to eat with instantaneously. It’s 2pm and 
            you want to grab a quick lunch with someone before 
            you 3pm meeting. You don’t have time to ask your 
            colleagues or message your friends to see if they’re 
            free. Using YUMI, you find someone to eat within 
            a 3 minute walk, with the tap of a button.
          </Paragraph>
        </MarginBottomM>
        
        <MarginBottomM text>
          <Header medium>
            The Brief
          </Header>
          <Paragraph>
            Many existing apps foster online interactions such as 
            social media and messaging apps. A growing number 
            of apps also lead to offline interactions such as 
            the dating app Tinder and transportation network Uber. 
            YUMI aims to cultivate organic offline human interactions 
            by redefining the process of meeting up with people 
            to be simple, easy, and relaxed. YUMI does this by 
            bringing people together through food, an amazing 
            conversation starter.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            Market Research
          </Header>
          <Paragraph>
            We did extensive market research for the course to verify 
            business insight early one and at each stage. 
            Our market research focused on large sample sizes 
            and on what people say and will buy, giving us board 
            insight. We surveyed over 200 people and 80% of college 
            students said they would try out an app that instantaneously 
            matched you with someone to eat with. 78% of working 
            professionals under 30 said they would try it out. Our 
            market research also indicated that those 30+ would not 
            use this app. With the target market of college students 
            and young professionals identified, we focused on creating 
            an experience tailored to their lifestyles and needs.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            User Research
          </Header>
          <Paragraph>
            While market research tells us what people will buy, 
            validating our product, it is less helpful in terms of 
            product development. This is where my user research 
            experience came in. User research allowed us to 
            understand what people do, how people use a product, 
            and focused on smaller sample sizes but resulted in 
            deep focused insight. Each person on the team sat down 
            with 5 people within our target market and engaged 
            in hour long interviews.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            Key Insights
          </Header>
          <Paragraph>
            We took our findings from both our surveys and interviews 
            and analyzed trends and key insights of what people said and did.
          </Paragraph>
          <NumList6 
            content_1="Over 80% of the people we surveyed or interviewed considered eating to be an inherently social activity. A majority of those people would prefer to eat with someone, even a stranger, than alone most of the time."
            content_2="Common reasons why people eat alone are they don’t know other people’s availabilities and their own, it’s inconvenient and time-intensive to individually message people to ask if they want to eat, and it’s awkward to ask strangers."
            content_3="Most college students and some young professionals have inconsistent meal times, especially lunch. For students, this is due to varying class schedules and for young professionals, due to often finishing a given task before eating lunch."
            content_4="A lot of people only had approximately an hour break for lunch and thus finding someone to eat with was time-sensitive."
            content_5="For young professionals, most co-workers are older and have families but want to meet people their age in the workforce."
            content_6="Many college students and young professionals alike are busy and constantly bombarded with a myriad of apps and social media networks so they need something that doesn’t add to the “noise” of technology is not intrusive on their daily lives."
          />
        </MarginBottomM>

        <PairImageSection
          src_left="https://cdn-images-1.medium.com/max/1200/1*1Y_hZlYdshV7bbCphwHXpw.jpeg"
          caption_left="Sketches of matching"
          src_right="https://cdn-images-1.medium.com/max/1200/1*m4p6IOjkTyEIP8NnIIJd3Q.jpeg"
          caption_right="Sketches of chat"
        />

        <MarginBottomM text>
          <Header medium>
            V1 Mid-fidelity mockups
          </Header>
          <Paragraph>
            This version emphasizes that Yumi matches you with 
            someone to eat with by location However, when we 
            showed users this app, some said it was confusing with 
            a lot of information on the screen and that it also 
            resembled the Uber app. Some users wondered why the 
            map was necessary because they didn't needed to confirm 
            an extact location. It was just taking up space. Max 
            distance is also something that users wouldn't change 
            each time they used Yumi so in later iterations, it is 
            placed in the "Settings".
          </Paragraph>
        </MarginBottomM>

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*14GdBbmEnphNYYnSj4kLEg.png"
          caption="V1 mid-fidelity mockups"
        />

        <MarginBottomM text>
          <Header medium>
            V2 Mid-fidelity mockups
          </Header>
          <Paragraph>
            This is the stripped down version of Yumi to its core 
            product: finding someone to eat with at a moments 
            notice. We arrived at this version because the "Set 
            Schedule" option was taking away from Yumi's "instaneous 
            experience". During testing of previous versions, people 
            rarely tapped the "Set Schedule" button even if they 
            knew they wanted to eat later. People said they would 
            simply open up Yumi later in the day when they wanted 
            to eat with someone. The "Set Schedule" had created 
            more hassle than value.
          </Paragraph>
        </MarginBottomM>

        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*zDRj3j10xYhuglx7OuOBRA.png"
          caption="V2 mid-fidelity mockups"
        />

        <MarginBottomM text>
          <Header medium>
            Final design
          </Header>
        </MarginBottomM>
        
        <MarginBottomM text>
          <Header small>
            Streamlined and seamless
          </Header>
          <Paragraph>
            Quickly find someone to eat with.
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <iframe class="marvel-iphone" src="https://marvelapp.com/17af897?emb=1" width="100%" height="580" allowtransparency="true" frameBorder="0" title="Prototype demo"></iframe>
        </MarginBottomM>

        <MarginBottomM text>
          <Header small>
            Customizable
          </Header>
          <Paragraph>
            Customize the max distance you can travel for a meal, 
            add languages you speak, and add preferred friends or 
            groups that rank higher when YUMI searches a platemate 
            for you. Edit your profile to reflect the foods you love and your interests!
          </Paragraph>
        </MarginBottomM>

        <MarginBottomM text>
          <iframe class="marvel-iphone" src="https://marvelapp.com/17afhh0?emb=1" width="100%" height="580" allowtransparency="true" frameBorder="0" title="Prototype settings demo"></iframe>
        </MarginBottomM>

        <MarginBottomM text>
          <Header medium>
            Results and reflection
          </Header>
          <Paragraph>
            My team and I created YUMI as part of the Technology 
            Entrepreneurship course at UC Berkeley. Team members 
            include Aaron Zhang, Alex Qian, Eric Chang, and myself. 
            The course introduces key entrepreneurial concepts 
            relevant to the high-technology world and how to 
            take ideas to real products. Topics include the entrepreneurial 
            process, customer discovery process, conducting market 
            research, funding options, entrepreneurial finance and 
            creation of the material for a business plan. As the UX/UI 
            designer on the team and a strong believer in using 
            the design process, I steered our product development 
            process to heavily rely on user research and other design principles.
          </Paragraph>
        </MarginBottomM>

        
      </div>
    );
  }
}

export default YumiProjectPage;