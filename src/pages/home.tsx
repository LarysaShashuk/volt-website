import React from 'react'
import { Header } from '../components/Header'
import { WelcomeBanner } from '../components/WelcomeBanner'
import { AboutUs } from '../components/AboutUs'

export const HomePage = () => {
  return (
    <>
      <Header />
      <WelcomeBanner />
      <AboutUs />
    </>
  )
}
