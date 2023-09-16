import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Footer } from './components/footer'
import { ContactForm } from './components/contactform'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

import { ReactComponent as CompanyIcon } from './logo.svg';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <WhatsAppWidget CompanyIcon={CompanyIcon} phoneNumber="0033762357058" />
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Gallery />
      <Services data={landingPageData.Services} />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
