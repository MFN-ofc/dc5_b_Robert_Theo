function combinaisons(n) {
    let result = [];
  
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (n == 2) {
          result.push(`${i}${j}`);
        } else {
          for (let k = 0; k < 10; k++) {
            if (n == 3) {
              result.push(`${i}${j}${k}`);
            } else {
              for (let l = 0; l < 10; l++) {
                if (n == 4) {
                  result.push(`${i}${j}${k}${l}`);
                } else {
                  for (let m = 0; m < 10; m++) {
                    if (n == 5) {
                      result.push(`${i}${j}${k}${l}${m}`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return result;
  }
  
  console.log(combinaisons(2));