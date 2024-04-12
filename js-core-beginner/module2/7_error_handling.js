function accessUndefinedProperty(obj) {
  try {
    const value = obj.undefinedProperty
    console.log("Значение свойства:", value)
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("TypeError:", error.message)
    } else {
      console.error("Other error:", error)
    }
  }
}
