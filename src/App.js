import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Physicians from './physicians';
import Schedule from './schedule';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app--left-pane">
          <Physicians />
        </div>
        <div className="app--right-pane">
          <Switch>
            <Route
              path="/physician/:physId/schedule"
              component={Schedule}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
