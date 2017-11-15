import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/toolbar/toolbar';
import List from './components/list/list';

ReactDOM.render(
  <ToolBar />,
  document.getElementById('app')
);

ReactDOM.render(
  <List />,
  document.getElementById('app-content')
);
