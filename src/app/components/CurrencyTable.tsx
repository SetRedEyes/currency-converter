import { Card, Table } from 'react-bootstrap'
import { getTodaysDate } from '../../utils/getTodaysDate'

const CurrencyTable = () => {
  return (
    <Card style={{ width: '17.5rem' }} className='ms-5'>
      <Card.Header className='text-center'>
        Курс станом на <i>{getTodaysDate()}</i>
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
              <td>444</td>
            </tr>
            <tr>
              <td>
                <b>EUR &#8364;</b>
              </td>
              <td>33</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}

export default CurrencyTable
