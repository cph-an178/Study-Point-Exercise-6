import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Changer from './Changer';

ReactDOM.render(<Changer />, document.getElementById('root'));
registerServiceWorker();
