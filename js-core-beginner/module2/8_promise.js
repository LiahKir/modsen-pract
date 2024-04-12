function contentFromURLs(arr) {
  const promises = []

  arr.forEach((url) => {
    const promise = new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Ошибка загрузки данных")
          }
          return response.text()
        })
        .then((data) => {
          resolve({ url, data })
        })
        .catch((error) => {
          reject(error)
        })
    })

    promises.push(promise)
  })

  return Promise.all(promises)
}
