export interface ICurrencyInputProps {
  amount: number
  currency: string
  currencyOpts: string[]
  onAmountChange: (target: number) => void
  onCurrencyChange: (target: string) => void
}

const CurrencyInput = ({
  amount,
  currency,
  currencyOpts,
  onAmountChange,
  onCurrencyChange
}: ICurrencyInputProps) => {
  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAmountChange(Number(e.target.value))
  }

  const handleCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(e.target.value)
  }

  return (
    <div className='group'>
      <input type='text' value={amount.toString()} onChange={handleAmount} />
      <select value={currency} onChange={handleCurrency}>
        {currencyOpts.map((c) => (
          <option key={c} value={c}>
            {c.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CurrencyInput
