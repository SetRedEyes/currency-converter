import React, { useContext, useState, useEffect } from 'react'
import uahService from '../services/http.uah.service'
import { convertCurrency } from '../utils/convertCurrency'

type ConverterContextProps = {
  children: React.ReactNode
}

export interface IConverterContext {
  isLoading: boolean
  date: string
  rates: { [key: string]: number }
  amount1: number
  amount2: number
  currency1: string
  currency2: string
  handleAmount1Change: (amount1: number) => void
  handleAmount2Change: (amount2: number) => void
  handleCurrency1Change: (currency1: string) => void
  handleCurrency2Change: (currency2: string) => void
  getDollarExchangeRate: (amount: number) => number
  getEuroExchangeRate: (amount: number) => number
}

const ConverterContext = React.createContext<IConverterContext | null>(null)

export const useConverter = () => {
  return useContext(ConverterContext) as IConverterContext
}

export const ConverterProvider = ({ children }: ConverterContextProps) => {
  const [isLoading, setLoading] = useState(true)
  const [date, setDate] = useState('')
  const [rates, setRates] = useState<{ [key: string]: number }>({})
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('usd')
  const [currency2, setCurrency2] = useState('uah')
  const [error, setError] = useState(null)

  useEffect(() => {
    getRates()
  }, [])

  useEffect(() => {
    if (rates) {
      handleAmount1Change(1)
    }
  }, [rates])

  const getRates = async () => {
    try {
      const { date, uah: uahRates } = await uahService.fetchAll()
      const { uah, usd, eur } = uahRates

      setDate(date)
      setRates({ uah, usd, eur })
      setLoading(false)
    } catch {
      errorCatcher(error)
    }
  }

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

  const getDollarExchangeRate = (amount = 1) =>
    convertCurrency(amount, rates['uah'], rates['usd'])

  const getEuroExchangeRate = (amount = 1) =>
    convertCurrency(amount, rates['uah'], rates['eur'])

  function errorCatcher(error: any) {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <ConverterContext.Provider
      value={{
        isLoading,
        date,
        rates,
        amount1,
        amount2,
        currency1,
        currency2,
        handleAmount1Change,
        handleAmount2Change,
        handleCurrency1Change,
        handleCurrency2Change,
        getDollarExchangeRate,
        getEuroExchangeRate
      }}
    >
      {children}
    </ConverterContext.Provider>
  )
}
