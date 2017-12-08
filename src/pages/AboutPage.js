import React from 'react';
import { ContentSection } from '../components/Spacing';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="AboutPage">
        <ContentSection text>
          <h1>
            About
          </h1>
        </ContentSection>
      </div>
    );
  }
}

export default AboutPage;