import React from 'react';
import ReactDOM from 'react-dom';
import ToolBar from './components/toolbar/toolbar';
import List from './components/list/list';
import Subject from './services/subject';
import Observer from './services/observer';

let observer = new Observer();
let subj = new Subject();
subj.addObserver(observer);
subj.notify();

ReactDOM.render(
  <ToolBar />,
  document.getElementById('app')
);

ReactDOM.render(
  <List />,
  document.getElementById('app-content')
);
