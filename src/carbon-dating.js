const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== 'string') return false
  if(Number.isNaN(parseFloat(sampleActivity)) === true) return false
  if(sampleActivity > 15 || sampleActivity <= 0) return false

  const A0 = 15  // Начальная активность изотопа
  let A = parseInt(sampleActivity)  // Конечная активность изотопа

  const wtf = 0.693
  
  let per = A0 / A  // N

  let t1_2 = 5730  // Период полураспада

  let k = wtf / t1_2   // Константа скорости реакции

  let time = Math.ceil(Math.log(per) / k) // Результат

  return time
};
