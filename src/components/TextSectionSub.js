import React from 'react';

import MarginBottomS from './MarginBottomS'; 
import Header from './Header';

function TextSectionSub(props) {
  return (
    <MarginBottomS text>
      <Header small>
        {props.header}
      </Header>
      {props.content}
    </MarginBottomS>
  );
}

export default TextSectionSub;