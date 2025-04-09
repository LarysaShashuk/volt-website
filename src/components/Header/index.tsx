import React, { useEffect, useState } from 'react'
import volt_logo from '../../assets/volt_logo.svg'
import './index.css'

export const Header: React.FC = () => {
  const links = {
    leftLinks: [
      {
        id: 0,
        title: 'Nos Services',
        url: '',
      },
      {
        id: 1,
        title: 'Nos Horaires et Menus',
        url: '',
      },
    ],
    rightLinks: [
      {
        id: 2,
        title: 'Vos  Événements',
        url: '',
      },
      {
        id: 3,
        title: 'Réservations',
        url: '',
      },
    ],
  }
  const [mobileNavigationIsOpen, setMobileNavigationOpen] = useState(false)

  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolledPercentage = (winScroll / height) * 100
      setScrolled(scrolledPercentage) // Update scroll percentage in state
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${scrolled > 0 || mobileNavigationIsOpen ? 'opaque' : ''}`}>
      <div className="container container-horizontal">
        <nav className="navigation">
          <div className="navigation__links">
            {links.leftLinks.map((link) => (
              <a href={link.url} key={link.id}>
                {link.title}
              </a>
            ))}
          </div>
          <div className="navigation__logo">
            <img src={volt_logo} alt="volt logo" />
          </div>
          <div className="navigation__links">
            {links.rightLinks.map((link) => (
              <a href={link.url} key={link.id}>
                {link.title}
              </a>
            ))}
          </div>

          <div className={`burger-menu ${mobileNavigationIsOpen ? 'active' : ''}`} onClick={() => setMobileNavigationOpen(!mobileNavigationIsOpen)}>
            <div></div>
          </div>
        </nav>
      </div>
      <div className={`mobile-navigation ${mobileNavigationIsOpen ? 'active' : ''}`}>
        {links.leftLinks.map((link) => (
          <a href={link.url} key={link.id}>
            {link.title}
          </a>
        ))}
        {links.rightLinks.map((link) => (
          <a href={link.url} key={link.id}>
            {link.title}
          </a>
        ))}
      </div>
    </header>
  )
}
