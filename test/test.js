// var code = require('../main.js');
// var expect = require('chai').expect;
//
// describe('leapYear', function(){
//   it('should say leap year', function(){
//     expect(code.leapYear(2016)).to.equal("It is a leap year");
//   });
// });

var code = require('../main.js');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
  it('should tax 10% on the first $10', function(){
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });
  it('should tax 7% on the third $10', function(){
    expect(code.calcTaxC(15)).to.equal(1.35);
  });
  it('should tax 5% on the third $10', function(){
    expect(code.calcTaxC(25)).to.equal(1.85);
  });
  it('should tax 3% for the rest', function(){
    expect(code.calcTaxC(35)).to.equal(2.15);
  });
});
