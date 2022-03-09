import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import People from './People';

Enzyme.configure({adapter: new Adapter()});

test('Renders Successfully', () => {
  shallow(<People />);
});
