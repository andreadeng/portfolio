import React, { Component } from 'react';
import { Link } from 'react-router';

import { ContentSection, Page } from '../atoms/Spacing';
import { SmallHeader } from '../atoms/Typography';
import { LinkHeader } from './Buttons';

const Chrome = (props) => (
  <Page padded='very'>
    <ContentSection text>
      <Link to='/'>
        <SmallHeader>
          <LinkHeader>Andrea Deng</LinkHeader>
        </SmallHeader>
      </Link>
    </ContentSection>
    {props.children}
  </Page>
);

export default Chrome;
