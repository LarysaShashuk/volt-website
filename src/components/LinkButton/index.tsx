import React from 'react'
import './index.css'

interface LinkButtonProps {
  title: string
  type: 'secondary' | 'primary'
  url: string
}

export const LinkButton = ({ title, type, url }: LinkButtonProps) => {
  return (
    <a href={url} className={`linkButton ${type}`}>
      {title}
    </a>
  )
}
