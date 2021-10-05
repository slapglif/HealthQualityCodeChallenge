import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'
import GenderOption from './GenderOption'

test('GenderOption snapshot test', () => {
  const component = renderer.create(
    <GenderOption />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});