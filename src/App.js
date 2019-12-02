import React from 'react';

import Physicians from './physicians';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app--left-pane">
        <Physicians />
      </div>
      <div className="app--right-pane"></div>
    </div>
  );
}

export default App;
