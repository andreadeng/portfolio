import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import Chrome from './components/Chrome';
import HomePage from './pages/HomePage';
import OrdersProjectPage from './pages/OrdersProjectPage';
import SpProjectPage from './pages/SpProjectPage';
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
          <Route path="about" component={AboutPage} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));