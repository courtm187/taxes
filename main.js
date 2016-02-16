//question: how

module.exports = {
  calcTax: function(income){
    if (income < 10){
      var a;
      a = income * 0.10;
      return a;
      }
    if (income >= 10 && income < 20){
      var b;
      b = a + ((income - 10)*0.07);
      return b;
    }
    if (income >= 20 && income < 30){
      var c;
      c = b + ((income - 20)*0.05);
      return c;
    }
  if (income >=30){
      var d;
      d = c + ((income - 30)*0.03);
      return d;
    }
  }
};
