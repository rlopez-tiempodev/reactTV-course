// vendors
import React from 'react';
// project
import Hello from '../app/hello';
// chai
import {expect} from 'chai'

describe('Testing', () => {
  
  it('should be 2', () => {
    let sum = 1 + 1;
    expect(sum).to.be.equal(2);
  });
});
