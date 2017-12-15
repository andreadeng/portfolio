import React, { Component } from 'react';
import { Link } from 'react-router';

import MarginBottomS from './MarginBottomS';
import Page from './Page';
import Header from './Header';
import { LinkHeader } from './Buttons';

const Chrome = (props) => (
  <Page padded='very'>
    <MarginBottomS text>
      <Link to='/'>
        <Header link>
          <LinkHeader>Andrea Deng</LinkHeader>
        </Header>
      </Link>
    </MarginBottomS>
    {props.children}
  </Page>
);

export default Chrome;
