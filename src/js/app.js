import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import '../css/style.scss';

render(<App />, document.querySelector('#main'));
