

var code = require('../main.js');
var expect = require('chai').expect;

describe('Tax Calculator', function(){
  it('should tax 10% on the first $10', function(){
    expect(code.calcTax(1)).to.equal(0.1);
    expect(code.calcTax(10)).to.equal(1);
  });
});


describe('Tax Calculator', function(){
  it('should tax 7% on the second $10', function(){
    expect(code.calcTaxB(15)).to.equal(1.35);
  });
});

describe('Tax Calculator', function(){
  it('should tax 5% on the third $10', function(){
    expect(code.calcTaxC(15)).to.equal(1.35);
  });
});

describe('Tax Calculator', function(){
  it('should tax 3% on the fourth $10', function(){
    expect(code.calcTaxD(100)).to.equal(3);
  });
});
