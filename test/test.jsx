import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from '../src/components/Hello';

Enzyme.configure({ adapter: new Adapter() });

test('Hello component', () => {
  const hello = shallow(<Hello name="test" />);

  expect(hello.hasClass('container')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
