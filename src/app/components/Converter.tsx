import { Card, Container, Image } from 'react-bootstrap'
import LoadingSpinner from './LoadingSpinner'
import exchange from '../../assets/images/exchange-arrows.svg'
import CurrencyInput from './CurrencyInput'
import { useConverter } from '../hooks/useConverter'

const Converter = () => {
  const {
    isLoading,
    rates,
    amount1,
    amount2,
    currency1,
    currency2,
    handleAmount1Change,
    handleAmount2Change,
    handleCurrency1Change,
    handleCurrency2Change
  } = useConverter()

  return (
    <Container className='converter-container'>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Card className='converter-card'>
          <Card.Body>
            <Card.Title className='ms-3'>Курс обміну валют</Card.Title>
            <Container className='d-flex mt-4'>
              <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencyOpts={Object.keys(rates)}
                amount={amount1}
                currency={currency1}
              />
              <Image
                src={exchange}
                className='ms-1 me-1 exchange-arrows'
              />
              <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencyOpts={Object.keys(rates)}
                amount={amount2}
                currency={currency2}
              />
            </Container>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default Converter
