import './App.css'
import { BelowHero } from './components/belowHero'
import { Container } from './components/container'
import { Container2 } from './components/Container2'
import { HeroImage } from './components/heroImages'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'
import { OneDiv } from './components/OneDiv'
import { ThirdSection } from './components/ThirdSection'
import { TwoDiv } from './components/TwoDiv'
import { TwoDiv2 } from './components/TwoDiv2'

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
    <TwoDiv2/>
  </Container>
  </Container2>
<ThirdSection/>
  </div>
}

export default App
