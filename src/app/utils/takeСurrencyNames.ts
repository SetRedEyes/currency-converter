export function takeCurrencyNames(currencies: {}) {
  const neededCurr = ['eur', 'usd', 'uah']
  return Object.keys(currencies).filter((c) => neededCurr.includes(c))
}
