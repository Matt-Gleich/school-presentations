import React from 'react'
import { toast, Toaster } from 'react-hot-toast'
import './styles/Movement.css'

let sent = false

export default () => {
  if (!sent) {
    toast('Use arrow keys to navigate through slides ← →')
    sent = true
  }
  return <Toaster toastOptions={{ className: 'movement' }} />
}
