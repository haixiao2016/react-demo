import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrap from './appWrap/appWrap'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
    <AppWrap/>,
  document.getElementById('root')
);
registerServiceWorker();
