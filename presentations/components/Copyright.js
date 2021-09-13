import React from 'react'
import './styles/Copyright.css'
import 'animate.css'

export default () => (
  <p className="copyright animate__animated animate__slideInUp">
    &copy; Matt Gleich 2004-{new Date().getFullYear()}{' '}
    <a
      href="https://github.com/gleich/school"
      target="_blank"
      rel="noreferrer"
      className="link"
    >
      gleich/school
    </a>
  </p>
)
