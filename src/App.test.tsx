import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('App component', function() {
  it('should render img tag without throwing an error', function() {
    expect(shallow(<App />).find('img').length).toEqual(1);
  });

  it('should render button tag without throwing an error', function() {
    expect(shallow(<App />).find('button').length).toEqual(1);
  });

});