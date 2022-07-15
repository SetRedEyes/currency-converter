import { Button, Container, Image, Navbar } from 'react-bootstrap'
import trident from '../../assets/images/trident.svg'
import uah from '../../assets/images/uah.svg'

import CurrencyTable from './CurrencyTable'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand className='text-center'>
          <Image src={trident}></Image>
          <h2 className='d-inline-block'>Realtime UAH Currency</h2>
          <Image src={uah}></Image>
          <br />
          <Button
            className='donate-btn'
            href='https://savelife.in.ua/donate/'
            target='_blank'
            rel='noreferrer'
          >
            <span id='Support'>Підтримати</span>
            <span id='AFU'>Збройні Сили України</span>
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end ms-5 ms-sm-4 mt-2 mt-lg-0 '
        >
          <CurrencyTable />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
