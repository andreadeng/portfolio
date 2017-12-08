import React from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute, Router, Route, hashHistory} from 'react-router';

import './index.css';
import './semantic/dist/semantic.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import OnHoldProjectPage from './pages/OnHoldProjectPage';

import AboutPage from './pages/AboutPage';


class Portfolio extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="on-hold-project-page" component={OnHoldProjectPage} />
          <Route path="project-page" component={ProjectPage} />
          <Route path="about" component={AboutPage} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));