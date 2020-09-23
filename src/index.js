import _ from 'lodash';
// import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render(_.upperFirst('index'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode');
} else {
  console.log('Development mode');
}

// helloWorldButton.methodThatDoesNotExist();
