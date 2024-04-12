function tasksSeries(country1, country2, country3) {
  const data = Promise.all([
    fetch(`https://restcountries.com/v3.1/name/${country1}`).then(function (resp) {
      return console.log(resp.json());
    }),

    fetch(`https://restcountries.com/v3.1/name/${country2}`).then(function (resp) {
      return console.log(resp.json());
    }),

    fetch(`https://restcountries.com/v3.1/name/${country3}`).then(function (resp) {
      return console.log(resp.json());
    }),
  ]);
}
