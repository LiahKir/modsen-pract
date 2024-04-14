async function fetchFromMultiple(urls) {
  const promises = urls.map(async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных с сервера ${url}`)
    }
    return response.json()
  })
  return await Promise.all(promises)
}
