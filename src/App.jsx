import { useState } from 'react'
import PromoBanner       from './components/PromoBanner.jsx'
import Navbar            from './components/Navbar.jsx'
import Hero              from './components/Hero.jsx'
import Menu              from './components/Menu.jsx'
import About             from './components/About.jsx'
import Reviews           from './components/Reviews.jsx'
import Reserve           from './components/Reserve.jsx'
import Catering          from './components/Catering.jsx'
import Contact           from './components/Contact.jsx'
import Footer            from './components/Footer.jsx'
import FloatingMessenger from './components/FloatingMessenger.jsx'

export default function App() {
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <>
      <PromoBanner visible={bannerVisible} onDismiss={() => setBannerVisible(false)} />
      <Navbar bannerVisible={bannerVisible} />
      <main>
        <Hero />
        <Menu />
        <About />
        <Reviews />
        <Reserve />
        <Catering />
        <Contact />
      </main>
      <Footer />
      <FloatingMessenger />
    </>
  )
}