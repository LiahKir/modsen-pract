async function fetchDataFromServer(url) {
  const response = await fetch(url).then((data) => {
    if (data) {
      console.log("Данные успешно загружены:", data)
    } else {
      console.log("Не удалось загрузить данные")
    }
  })
}
