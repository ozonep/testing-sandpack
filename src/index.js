import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import NewNewApp from "./App3";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NewNewApp />, document.getElementById('root'));

serviceWorker.unregister();
