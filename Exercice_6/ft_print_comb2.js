let numbers = [0,1,2,3,4,5,6,7,8,9];

function comb() {
  let tab = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        for (let l = 0; l < numbers.length; l++) {
          if (numbers[i] + '' + numbers[j] < numbers[k] + '' + numbers[l]) {
            tab.push(numbers[i] + "" + numbers[j] + " " + numbers[k] + "" + numbers[l]);
          }
        }
      }
    }
  }
  let result = tab.join(', ');
  return result;
}

console.log(comb());