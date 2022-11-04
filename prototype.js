Object.defineProperty(Array.prototype, "pSum", {
    value: function () {
      let sum = 0;
      this.forEach((value) => {
        sum += value;
      });
  
      return sum;
    },
  });
  
  let arr = [69, 69, 69];
  let arraySum = arr.pSum();
  console.log(`Sum of arr : ${arraySum}`);