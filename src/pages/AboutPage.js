import React from 'react';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Caption from '../components/Caption';
import MarginBottomM from '../components/MarginBottomM';
import MarginBottomS from '../components/MarginBottomS';
import ImageSection from '../components/ImageSection';
import Span from '../components/Span';


class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <MarginBottomS text>
          <Header medium>
          </Header>
        </MarginBottomS>
        <ImageSection
          src="https://cdn-images-1.medium.com/max/1600/1*SdsGU5BxaHwj4w2Rsdyjcw.jpeg"
          caption="Sipping iced matcha at Tea Chai Te in Portland, Oregon"
        />
        <MarginBottomM text>
          <Header medium>
            Hi there, I’m Andrea
          </Header>
          <Paragraph>
            I’m a Product Designer in SF who has worked
            at Scalable Press, a fulfillment startup in San Francisco, Hack Club, 
            a nonprofit network of free student-led coding clubs, and the VIA Social Innovation 
            and Design Thinking program.
          </Paragraph>
          <Paragraph>
            My fascination for people drives me to be a Product 
            Designer. I am constantly intrigued by how people use 
            and feel about technology. My vision is to unleash a 
            person’s potential by designing tools that empower.
          </Paragraph>
        </MarginBottomM>
        <MarginBottomM text>
          <Header small>
            Lets chat!
          </Header>
          <Paragraph>
            Email me at&nbsp;
            <Span strong primary>
              im.andreadeng@gmail.com
            </Span>
          </Paragraph>
        </MarginBottomM>
      </div>
    );
  }
}

export default AboutPage;