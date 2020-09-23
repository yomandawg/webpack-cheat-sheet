import _ from 'lodash';

import './hello.scss';

import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const heading = new Heading();
heading.render(_.upperFirst('hello'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
