"use strict"

function countVowels(str) {
  let result = 0
  str.split("").forEach((element) => {
    if (
      [
        "a",
        "e",
        "i",
        "o",
        "u",
        "y",
        "a",
        "е",
        "ё",
        "и",
        "о",
        "у",
        "ы",
        "э",
        "ю",
        "я",
      ].includes(element)
    )
      result++
  })
  return result
}
