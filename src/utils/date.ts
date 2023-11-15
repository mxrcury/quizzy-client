export function dateDiff(dateNow: number, dateFuture: number) {
  let seconds = Math.floor((dateFuture - dateNow) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  let days = Math.floor(hours / 24)

  hours = hours - days * 24
  minutes = minutes - days * 24 * 60 - hours * 60
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  return {
    hours,
    minutes,
    seconds,
    days
  }
}
