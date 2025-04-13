import React from 'react'
import { BeerIcn, BrunchIcn, CarIcn, CocktailsIcn, ConferenceIcn, CouchIcn, HockeyIcn, LaptopIcn, MeetingIcn, RestorationIcn, TerraceIcn } from '../../assets/CustomIcons'
import './index.css'

export const Services = () => {
  const services = [
    {
      id: 0,
      title: 'Un bar sportif',
      description: 'Un bar sportif où sont diffusés sur plusieurs écrans en direct les rencontres sportives du moment (foot, hockey, tennis, JO, …)',
      icon: <BeerIcn />,
    },
    {
      id: 1,
      title: 'Un restaurant',
      description: 'Un restaurant ouvert tous les midis et soirs de la semaine ainsi que les midis du week-end',
      icon: <RestorationIcn />,
    },
    {
      id: 2,
      title: 'Un salon',
      description: 'Un salon avec espace enfant et bibliothèque partagée',
      icon: <CouchIcn />,
    },
    {
      id: 3,
      title: 'Un espace de co-working',
      description: 'Un espace de co-working gratuit et accessible à tous pendant les journées en semaine',
      icon: <LaptopIcn />,
    },
    {
      id: 4,
      title: 'Des terrasses',
      description: 'Des terrasses extérieures bénéficiant d’un large ensoleillement',
      icon: <TerraceIcn />,
    },
    {
      id: 5,
      title: 'Une guinguette',
      description: 'Une guinguette pour profiter des beaux jours',
      icon: <CocktailsIcn />,
    },
    {
      id: 6,
      title: 'Des salles de réunion',
      description: 'Des salles de réunion privatisables et complètement équipées, disposant d’une capacité maximale de 18, 30 et 45 places',
      icon: <MeetingIcn />,
    },
    {
      id: 7,
      title: 'Une salle de conférence',
      description: 'Une salle de conférence d’une capacité maximale de 90 places',
      icon: <ConferenceIcn />,
    },
    {
      id: 8,
      title: 'Un brunch',
      description: 'Un brunch familial proposé tous les dimanche midi',
      icon: <BrunchIcn />,
    },
    {
      id: 9,
      title: 'Un parking gratuit',
      description: 'Un parking gratuit avec + de 200 emplacements',
      icon: <CarIcn />,
    },
    {
      id: 10,
      title: 'Des terrains de sport',
      description: 'Des terrains de sport: 2 terrains de hockey sur gazon, 3 terrains de padel extérieurs, 13 terrains de tennis, 2 terrains de pickleball',
      icon: <HockeyIcn />,
    },
  ]
  return (
    <section className="servicesSection" id="services">
      <div className="container container-vertical">
        <h2>NOS SERVICES</h2>
        <div className="servicesSection__content">
          {services.map((item, i) => (
            <div key={`service_${i}`} className="servicesSection__content__item">
              <div className="servicesSection__content__item__illustration">{item.icon}</div>
              <div className="servicesSection__content__item__text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
