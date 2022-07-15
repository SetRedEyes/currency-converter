import { Form, InputGroup } from 'react-bootstrap'

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
    <InputGroup size='lg'>
      <Form.Control
        type='number'
        value={amount.toString()}
        onChange={handleAmount}
      />

      <Form.Select
        className='currency-select'
        aria-label='Default select example'
        value={currency}
        onChange={handleCurrency}
      >
        {currencyOpts.map((c) => (
          <option key={c} value={c}>
            {c.toUpperCase()}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  )
}

export default CurrencyInput
