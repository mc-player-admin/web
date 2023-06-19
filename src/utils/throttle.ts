export const throttle = (cb: () => void, time: number) => {
  let timeout: number | null
  return () => {
    console.log(timeout)
    console.log(timeout)

    if (timeout) {
      return
    }
    timeout = setTimeout(() => {
      timeout = null
      console.log(timeout)
      return cb()
    }, time)
  }
}
