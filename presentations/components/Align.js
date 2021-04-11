import React from 'react'
import './styles/Align.css'
import 'animate.css'

const Row = ({ children }) => <div className={'row'}>{children}</div>
const Column = ({ children, animation }) => (
  <div className={`animate__animated ${animation}`}>{children}</div>
)

export { Row, Column }
