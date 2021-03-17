import React from 'react'
import './styles/Title.css'
import 'animate.css'

export default ({ children }) => (
  <h1 className="title animate__animated animate__fadeInDown">{children}</h1>
)
