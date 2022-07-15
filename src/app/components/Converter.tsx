import { Card, Container, Form } from 'react-bootstrap'

const Converter = () => {
  return (
    <Container className='d-flex justify-content-center mt-5 '>
      <Card
        style={{
          width: '50rem',
          height: '20rem'
        }}
      >
        <Card.Body>
          <Card.Title>Курс обміну валют</Card.Title>
       
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Converter
