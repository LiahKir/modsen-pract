function isNumberInteger(numb) {
  if (!Number.isInteger(numb))
    throw new Error(`Number ${numb} is not an integer`)
  else console.log(`Number ${numb} is an integer`)
}
