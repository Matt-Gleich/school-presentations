import React from 'react'
import './styles/Copyright.css'
import 'animate.css'

export default () => (
  <p className="copyright animate__animated animate__slideInUp">
    &copy; Matt Gleich {new Date().getFullYear()} |{' '}
    <a href="https://github.com/gleich/school" target="_blank" rel="noreferrer">
      gleich/school
    </a>
  </p>
)
