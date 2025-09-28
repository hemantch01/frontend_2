import './App.css'
import { BelowHero } from './components/belowHero'
import { Container } from './components/container'
import { Container2 } from './components/Container2'
import { FooterBar } from './components/FooterBar'
import { FooterSection } from './components/FooterSection'
import { HeroImage } from './components/heroImages'
import { HeroSection } from './components/heroSection'
import { Navbar } from './components/navbar'
import { OneDiv } from './components/OneDiv'
import { PricingSection } from './components/PricingSection'
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
<PricingSection/>
<FooterSection/>
<FooterBar/>
  </div>
}

export default App
