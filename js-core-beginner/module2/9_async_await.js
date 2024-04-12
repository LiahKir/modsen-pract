async function dataTransfer(countryNumber) {
  const response = await fetch("https://restcountries.com/v3.1/all")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      return data[countryNumber].name.common
    })
    .then(function (country) {
      console.log(
        fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
          response
        ) {
          return response.json()
        })
      )
    })
}
