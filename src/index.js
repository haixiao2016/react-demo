import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProList from './proList/proList'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<ProList />, document.getElementById('root'));
registerServiceWorker();
