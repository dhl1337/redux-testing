// Set up testing environment to run like a browser in the command line
// build 'renderComponent' helper that should render a given react class
// build helper for simulating events
// set up chai-jquery

import { jsdom } from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';

//window -> global
global.document = jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);

function renderComponent(ComponentClass) {
  const componentInstance = TestUtils.renderIntoDocument(<ComponentClass/>);

  ReactDOM.findDOMNode(componentInstance);
}
