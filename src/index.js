import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import Chrome from './components/Chrome';
import HomePage from './pages/HomePage';
import OrdersProjectPage from './pages/OrdersProjectPage';
import SpProjectPage from './pages/SpProjectPage';
import TeeChipProjectPage from './pages/TeeChipProjectPage';
import BinderProjectPage from './pages/BinderProjectPage';
import YumiProjectPage from './pages/YumiProjectPage';
import AboutPage from './pages/AboutPage';
import './index.css';

class Portfolio extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Chrome}>
          <IndexRoute component={HomePage} />
          <Route path="orders-project-page" component={OrdersProjectPage} />
          <Route path="sp-project-page" component={SpProjectPage} />
          <Route path="teechip-project-page" component={TeeChipProjectPage} />
          <Route path="binder-project-page" component={BinderProjectPage} />
          <Route path="yumi-project-page" component={YumiProjectPage} />
          <Route path="about" component={AboutPage} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));