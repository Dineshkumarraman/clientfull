var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var validateLength = require('../src/validateFolder/validate');

describe('Length Validation', function() {
  it('input field length should be less than or equal to 10', function() {
    var initialVal = new validateLength("samplestr");
    expect(initialVal.checkLength()).to.be.at.most(10);
  });
});