import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
// import { Provider } from 'react-redux';
// import configureStore from './redux/configureStore';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
