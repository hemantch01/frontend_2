import './App.css'
import { Container } from './components/container'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'

function App() {

  return <div className='layout'>
  <Container>
    <Navbar/>
    <HeroSection/>
  </Container>
  </div>
}

export default App
