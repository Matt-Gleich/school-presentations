import React from 'react'
import './styles/Copyright.css'
import 'animate.css'

export default () => (
  <p className="copyright animate__animated animate__slideInUp">
    &copy; Matthew Gleich {new Date().getFullYear()} | See the{' '}
    <a
      href="https://github.com/Matt-Gleich/school-presentations"
      target="_blank"
      rel="noreferrer"
    >
      source code
    </a>
  </p>
)
