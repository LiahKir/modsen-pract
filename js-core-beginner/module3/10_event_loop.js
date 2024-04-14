function generateDelay() {
  const num = Math.floor(Math.random(1, 10) * 10 + 1)
  let promise = new Promise((res, rej) => {
    if (num > 5) rej()
    else {
      setTimeout(() => {
        res()
      }, num * 1000)
    }
  })

  promise.then(
    () => {
      console.log("Fulfilled: number is " + num)
    },
    () => {
      console.log("Rejected:  number is " + num)
    }
  )
}
