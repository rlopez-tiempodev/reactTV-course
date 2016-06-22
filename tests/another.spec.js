// vendors
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils'
// project
import Hello from '../app/hello';
// chai
import {expect} from 'chai'

describe('Another', () => {
  const hello = TestUtils.renderIntoDocument(<Hello/>);
  
  it('renders without problems', function () {
    expect(hello).to.exist;
  });

});

