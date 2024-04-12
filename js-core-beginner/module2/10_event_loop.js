async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController()
  const signal = controller.signal
  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout)

  try {
    const response = await fetch(url, { signal })
    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error("Ошибка загрузки данных")
    }
    const data = await response.json()
    return data
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Запрос отменен из-за превышения времени ожидания")
    } else {
      console.error("Произошла ошибка:", error)
    }
    return null
  }
}
