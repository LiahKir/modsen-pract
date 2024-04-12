function sumOfFirstAndLastDigit(numb) {
  numb = numb.toString().split("")
  return Number(numb[0]) + Number(numb[numb.length - 1])
}
