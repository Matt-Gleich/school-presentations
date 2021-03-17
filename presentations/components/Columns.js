import React from 'react'
import './styles/Columns.css'
import 'animate.css'

const Columns = ({ children }) => <div className={'columns'}>{children}</div>
const Column = ({ children, animation }) => (
  <div className={`column animate__animated ${animation}`}>{children}</div>
)

export { Columns, Column }
