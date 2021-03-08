import React from 'react'
import './styles/Copyright.css'

export default () => (
  <p className="copyright">
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
