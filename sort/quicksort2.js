/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = 1
  if (x < 0) {
    isNegative = -1
    x = -x;
  }
  let result = 0
  let y = x
  while (y > 0) {
    result = result * 10 + y % 10
    // console.log(result)
    y = Math.floor(y / 10)

    return isNegative * result

  };