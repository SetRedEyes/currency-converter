import './App.scss'
import { useEffect, useState } from 'react'
import CurrencyInput from './components/CurrencyInput'
import axios from 'axios'
import { convertCurrency } from '../utils/convertCurrency'
import Converter from './components/Converter'
import Header from './components/Header'
import CurrencyBlock from './components/CurrencyTable'

const App = () => {
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('usd')
  const [currency2, setCurrency2] = useState('uah')
  const [rates, setRates] = useState<{ [key: string]: number }>({})

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/uah.json'
    )

    const { uah, usd, eur } = data.uah
    setRates({ uah, usd, eur })
  }

  useEffect(() => {
    fetchData().catch(console.error)
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
    <>
      <Header/>
      <Converter />
     

      {/* <div>
        <CurrencyInput
          onAmountChange={handleAmount1Change}
          onCurrencyChange={handleCurrency1Change}
          currencyOpts={Object.keys(rates)}
          amount={amount1}
          currency={currency1}
        />
        <CurrencyInput
          onAmountChange={handleAmount2Change}
          onCurrencyChange={handleCurrency2Change}
          currencyOpts={Object.keys(rates)}
          amount={amount2}
          currency={currency2}
        />
      </div> */}
    </>
  )
}

export default App
