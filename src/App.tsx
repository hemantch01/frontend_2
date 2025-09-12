import './App.css'
import { BelowHero } from './components/belowHero'
import { Container } from './components/container'
import { HeroImage } from './components/heroImages'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'

function App() {

  return <div className='layout'>
  <Container>
    <Navbar/>
    <HeroSection/>
    <HeroImage/>
    <BelowHero/>
  </Container>
  </div>
}

export default App
