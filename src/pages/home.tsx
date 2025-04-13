import React from 'react'
import { Header } from '../components/Header'
import { WelcomeBanner } from '../components/WelcomeBanner'
import { AboutUs } from '../components/AboutUs'
import { Services } from '../components/Services'

export const HomePage = () => {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <AboutUs />
      <Services />
    </>
  )
}
