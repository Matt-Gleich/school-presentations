import React from 'react'
import './styles/Columns.css'

const Columns = ({ children }) => <div className={'columns'}>{children}</div>
const Column = ({ children }) => <div className={'column'}>{children}</div>

export { Columns, Column }
