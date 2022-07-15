import './App.scss'
import Converter from './components/Converter'
import Header from './components/Header'
import { ConverterProvider } from './hooks/useConverter'

const App = () => {
  return (
    <ConverterProvider>
        <Header />
        <Converter />
    </ConverterProvider>
  )
}

export default App
