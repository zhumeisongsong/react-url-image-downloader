import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('App component', function() {
  it('should test App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
   });

   it('should render App component', () => {
    expect(shallow(<App />).find('.container').length).toEqual(1);
   });

  it('should render img tag', function() {
    expect(shallow(<App />).find('img').length).toEqual(1);
  });

  it('should render button tag', function() {
    expect(shallow(<App />).find('button').length).toEqual(1);
  });

});