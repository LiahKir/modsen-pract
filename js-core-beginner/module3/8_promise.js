async function fetchMultipleApis(urls) {
  const responses = await Promise.all(urls.map((url) => fetch(url)))

  const dataPromises = responses.map(async (response) => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.statusText}`)
    }
    return response.json()
  })

  const dataArray = await Promise.all(dataPromises)

  return dataArray.reduce((acc, data) => {
    return acc.concat(data)
  }, [])
}
