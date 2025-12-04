import React from 'react'
import Hero from '../components/sections/Hero'
import ServicesPreview from '../components/sections/ServicesPreview'
import AboutPreview from '../components/sections/AboutPreview'
import ContactPreview from '../components/sections/ContactPreview'

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
  )
}

export default Home