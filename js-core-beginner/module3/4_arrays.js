function sumOfSquares(arr) {
  return arr.reduce((acc, val) => {
    return (acc += Math.pow(val, 2))
  }, 0)
}
