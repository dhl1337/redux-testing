// Set up testing environment to run like a browser in the command line
// build 'renderComponent' helper that should render a given react class
// build helper for simulating events
// set up chai-jquery

import jsdom from 'jsdom';
import jquery from 'jquery';

//window -> global
global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);
