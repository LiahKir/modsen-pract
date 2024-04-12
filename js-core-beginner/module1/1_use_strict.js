"use strict"

function factorial(numb) {
  const arr = Array(numb)
    .fill()
    .map((e, i) => i + 1)
  return arr.reduce((acc, value) => {
    return (acc *= value)
  })
}
