import React from 'react'
import Services from '../_components/Services'
import HeroAbout from './HeroAbout'
import FeatureAbout from './FeatureAbout'
import Category from '../_components/Category'


const AboutUs = () => {
  return (
    <section className='about-us'>
     <HeroAbout/>
      <Services/>
      <FeatureAbout/>
      <Category/>
    </section>
  )
}

export default AboutUs