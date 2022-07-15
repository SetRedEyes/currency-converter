import { Card, Table } from 'react-bootstrap'
import LoadingSpinner from './LoadingSpinner'
import { useConverter } from '../hooks/useConverter'

const CurrencyTable = () => {
  const { date, isLoading, getDollarExchangeRate, getEuroExchangeRate } =
    useConverter()

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Card className='ms-5 exchange-table'>
      <Card.Header className='text-center'>
        Курс станом на <i>{date.replaceAll('-', '.')}</i>
      </Card.Header>
      <Card.Body className='p-0'>
        <Table bordered hover size='sm' className='m-0 text-center'>
          <thead>
            <tr>
              <td>&#x1F5D8;</td>
              <th>UAH &#8372;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>USD &#36;</b>
              </td>
              <td>{getDollarExchangeRate(1)}</td>
            </tr>
            <tr>
              <td>
                <b>EUR &#8364;</b>
              </td>
              <td>{getEuroExchangeRate(1)}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default CurrencyTable
