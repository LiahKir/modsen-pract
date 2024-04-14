function firstNonRepeatingLetter(s) {
  let array1 = s.split("")
  let array2 = s
    .toLowerCase()
    .split("")
    .filter(function (number, index, arr) {
      return (
        (!(arr.lastIndexOf(number) == index) ||
          !(arr.indexOf(number) == index)) &&
        true
      )
    })
  array2 = Array.from(new Set(array2))
  for (i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i].toLowerCase())) return array1[i]
  }
  return ""
}
