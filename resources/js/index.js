import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/toolbar/toolbar';
import List from './components/list/list';
import Observer from './services/observer';

const observer = new Observer();
observer.publish('MY TOPIC', 'Teesssst!');

ReactDOM.render(
  <ToolBar />,
  document.getElementById('app')
);

ReactDOM.render(
  <List />,
  document.getElementById('app-content')
);
