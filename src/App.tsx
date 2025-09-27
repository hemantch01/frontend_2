import './App.css'
import { BelowHero } from './components/belowHero'
import { Container } from './components/container'
import { Container2 } from './components/Container2'
import { HeroImage } from './components/heroImages'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'
import { OneDiv } from './components/OneDiv'
import { TwoDiv } from './components/TwoDiv'

function App() {

  return <div className='layout'>
  <Container>
    <Navbar/>
    <HeroSection/>
    <HeroImage/>
    <BelowHero/>
  </Container>
  <Container2>
  <Container>
    <TwoDiv/>
    <OneDiv/>
  </Container>
  </Container2>
  </div>
}

export default App
