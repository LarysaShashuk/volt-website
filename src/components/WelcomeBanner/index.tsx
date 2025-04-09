import React from 'react'

import { LinkButton } from '../LinkButton'
import './index.css'

export const WelcomeBanner = () => {
  return (
    <section className="welcomeBanner">
      <div className="container container-vertical">
        <div className="welcomeBanner__innerContainer">
          <div className="welcomeBanner__heading">
            <h2>Bienvenue au</h2>
            <h1>Volt</h1>
            <h2>Le clubhouse du Royal Uccle Sport</h2>
          </div>
          <div className="welcomeBanner__buttons">
            <LinkButton title="Voir le menu" type="primary" url="#menuSection" />
            <LinkButton title="Faire une réservation" type="secondary" url="#reservationSection" />
          </div>
        </div>
      </div>
    </section>
  )
}
