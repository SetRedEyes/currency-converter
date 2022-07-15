export function convertCurrency(
  amount: number,
  opositeCurrency: number,
  currency: number
): number {
  return Number(((amount * opositeCurrency) / currency).toFixed(3))
}
