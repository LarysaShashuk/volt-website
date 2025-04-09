import React from 'react'
import { BeerIcn, HockeyIcn, TeamIcn } from '../../assets/CustomIcons'
import './index.css'

export const AboutUs = () => {
  const keyPoints = [
    {
      id: 0,
      title: 'Le Volt offre les services d’un bar sportif, d’un restaurant et bien plus encore.',
      iconElement: <BeerIcn />,
    },
    {
      id: 1,
      title: 'Le Volt est ouvert tous les jours de l’année, de 8h à minuit, et est accessible à tous.',
      iconElement: <TeamIcn />,
    },
    {
      id: 2,
      title: 'Il est situé au cœur du Royal Uccle Sport, club de hockey sur gazon, tennis, padel et pickleball.',
      iconElement: <HockeyIcn />,
    },
  ]

  return (
    <section className="aboutUs">
      <div className="container container-vertical">
        <h3>À propos de nous</h3>
        <div className="aboutUs__keyPoints">
          {keyPoints.map((keyPoint) => (
            <div className="aboutUs__keyPoints__item" key={keyPoint.id}>
              <div className="aboutUs__keyPoints__item__icon">{keyPoint.iconElement}</div>
              <p>{keyPoint.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
