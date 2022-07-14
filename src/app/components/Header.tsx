import { Button, Container, Image,  Navbar } from 'react-bootstrap'
import trident from '../../assets/images/trident.svg'
import uah from '../../assets/images/uah.svg'
import CurrencyBlock from './CurrencyBlock'
const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand className='text-center '>
          <Image src={trident}></Image>
          <h2 className='d-inline-block'>Realtime UAH Currency</h2>
          <Image src={uah}></Image>
          <br />
            <Button
              className='donate-btn'
              href='https://bank.gov.ua/ua/about/support-the-armed-forces'
              target='_blank'
              rel='noreferrer'
            >
              <span id='Support'>Підтримати</span>
              <br />
              <span id='AFU'>Збройні Сили України</span>
            </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end ms-5 mt-2 mt-lg-0 '
        >
          <CurrencyBlock />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header