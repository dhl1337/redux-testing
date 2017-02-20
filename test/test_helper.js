// Set up testing environment to run like a browser in the command line
// build 'renderComponent' helper that should render a given react class
// build helper for simulating events
// set up chai-jquery
import React from 'react';
import ReactDOM from 'react-dom';
import { jsdom } from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';

//window -> global
global.document = jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;

const $ = jquery(global.window);

function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML
}

$.fn.simulate = function (eventName, value) {
  TestUtils.Simulate[eventName](this[0]);
};

export { renderComponent, expect };
