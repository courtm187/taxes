

module.exports = {
  calcTax: function(income){
    if (income < 10){
      return income * 0.10;
      }
    else if (income >= 10 && income < 20){
      return 1 + ((income - 10)*0.07);
    }
    else if (income >= 20 && income < 30){
      return 1.7 + ((income - 20)*0.05);
    }
  else if (income >=30){
      return 2.3 + ((income - 30)*0.03);
    }
  }
};
