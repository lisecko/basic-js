const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = []) {
  if(arr.length === 0) return []

  let temp = arr

  for(let i = 0; i < arr.length; i++)
  {
    for(let j = 0; j < arr[i].length; j++)
    {
      if(typeof(arr[i][j]) !== 'number')
      {
        if(arr[i][j] === '--discard-next') {
          if(j !== arr[i].length - 1) {
            temp[i].splice(j, 2)
          } else {
            temp[i].splice(j, 1)
          }          
        }

        if(arr[i][j] === '--discard-prev'){
          if(j !== 0) {
            temp[i].splice(j - 1, 2)
          } else {
            temp[i].splice(j, 1)
          }
        }

        if(arr[i][j] === '--double-next') {
          if(j !== arr[i].length - 1) {
            temp[i].splice(j, 1, j+1)
          } else {
            temp[i].splice(j, 1)
          }
        }

        if(arr[i][j] === '--double-prev') {
          if(j !== 0) {
            temp[i].splice(j, 1, j)
          } else {
            temp[i].splice(j, 1)
          }
        }
      }
    }    
  }
  let result

  for(let i = 0; i < temp.length(1); i++)
  {
    result.push(temp[i])
  }

  return result

  


};
