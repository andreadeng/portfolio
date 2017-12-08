import React, { Component } from 'react';
import logo from './logo.svg';
import { ContentSection, Page } from './components/Spacing';
import { Link } from 'react-router';
import { MediumHeader, SmallHeader } from './components/Typography';
import { LinkHeader } from './components/Buttons';

import { Container } from 'semantic-ui-react'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page padded='very'>
          <ContentSection text>
            <Link to="/">
              <MediumHeader>
                <LinkHeader>Andrea Deng</LinkHeader>
              </MediumHeader>
            </Link>
          </ContentSection>
    		  {this.props.children}
        </Page>
      </div>
    );
  }
}

export default App;
