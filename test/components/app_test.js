import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe to group together similar tests
//describe('App');

// use 'it' to test a single attribute of a target
//it('shows the correct text');

// Use 'expect' to make an 'assertion' about a target
//expect

describe('App', () => {

  it('shows the correct text', () => {
    // create an instance of app
    const component = renderComponent(App);

    expect(component).to.contain('React simple starter');
  });

});