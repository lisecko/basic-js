const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = []) {
  // if(arr.length === 0) return []

  // let temp = arr;
  // let count = 0;

  // for(let i = 0; i < arr.length; i++)
  // {
  //   for(let j = 0; j < arr[i].length; j++)
  //   {
  //     if(typeof(arr[i][j]) !== 'number')
  //     {
  //       if(arr[i][j] === '--discard-next') {
  //         if(j !== arr[i].length - 1) {
  //           temp[i].splice(j, 2)
  //         } else {
  //           temp[i].splice(j, 1)
  //         }          
  //       }

  //       if(arr[i][j] === '--discard-prev'){
  //         if(j !== 0) {
  //           temp[i].splice(j - 1, 2)
  //         } else {
  //           temp[i].splice(j, 1)
  //         }
  //       }

  //       if(arr[i][j] === '--double-next') {
  //         if(j !== arr[i].length - 1) {
  //           temp[i].splice(j, 1, j+1)
  //         } else {
  //           temp[i].splice(j, 1)
  //         }
  //       }

  //       if(arr[i][j] === '--double-prev') {
  //         if(j !== 0) {
  //           temp[i].splice(j, 1, j)
  //         } else {
  //           temp[i].splice(j, 1)
  //         }
  //       }
  //     } else {
  //       count++
  //     }
  //   }    
  // }

  // if(count === arr.length) return false;

  // let result = []

  // for(let i = 0; i < 1; i++)
  // {
  // 	for(let j = 0; j < temp[i].length; j++)
  //   {
  //   	result.push(temp[i][j])
  //   }    
  // }

  // return result;

  if (Array.isArray(arr) === false) {
    throw new Error('THROWN')
  } else {
    if (arr.length === 0) return [];
    let newArr = []
    let i = 0;
    let isDel = false;
    arr.forEach((el, index) => {
        if (el !== '--double-next' && el !== '--discard-next' && el !== '--double-prev' && el !== '--discard-prev') {
            if (arr[index - 1] === '--double-next' || arr[index - 1] === '--discard-next') {
                if (arr[index - 1] === '--discard-next') isDel = true;
                if (arr[index - 1] === '--double-next') newArr[i++] = el
            }
            if (isDel == false && (arr[index + 1] === '--double-prev' || arr[index + 1] === '--discard-prev')) {
                if (arr[index + 1] === '--discard-prev') {
                    newArr[i++] = el
                    i--;
                    newArr.pop()
                    isDel = true;
                }
                if (arr[index + 1] === '--double-prev')
                    newArr[i++] = el
            }
            if (isDel == false) newArr[i++] = el
            isDel = false;
        }
    })
    return newArr
  }
};
