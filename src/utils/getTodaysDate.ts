export function getTodaysDate(): string {
  let d = new Date()
  let month = (d.getMonth() + 1).toString()
  let day = d.getDate().toString()
  let year = d.getFullYear()
  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }
  return [year, month, day].join('-')
}
