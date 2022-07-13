import './App.css'
import { useEffect, useState } from 'react'
import CurrencyInput from './components/CurrencyInput'
import axios from 'axios'
import { takeCurrencyNames } from '../utils/takeСurrencyNames'
import { convertCurrency } from '../utils/convertCurrency'

const App = () => {
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('usd')
  const [currency2, setCurrency2] = useState('uah')
  const [rates, setRates] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    axios
      .get(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json'
      )
      .then((res) => {
        const uah = res.data.uah
        setRates(uah)
      })
  }, [])

  useEffect(() => {
    if (rates) {
      handleAmount1Change(1)
    }
  }, [rates])

  const handleAmount1Change = (amount1: number) => {
    setAmount2(convertCurrency(amount1, rates[currency2], rates[currency1]))
    setAmount1(amount1)
  }

  const handleCurrency1Change = (currency1: string) => {
    setAmount2(convertCurrency(amount1, rates[currency2], rates[currency1]))
    setCurrency1(currency1)
  }

  const handleAmount2Change = (amount2: number) => {
    setAmount1(convertCurrency(amount2, rates[currency1], rates[currency2]))
    setAmount2(amount2)
  }

  const handleCurrency2Change = (currency2: string) => {
    setAmount1(convertCurrency(amount2, rates[currency1], rates[currency2]))
    setCurrency2(currency2)
  }

  return (
    <div>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencyOpts={takeCurrencyNames(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencyOpts={takeCurrencyNames(rates)}
        amount={amount2}
        currency={currency2}
      />
    </div>
  )
}

export default App
