import React from 'react'
import MUIButton from '@material-ui/core/Button'

export default function Button({ label, onClick, emphasis='low', ...style }) {
  const variants = {
    low: 'text',
    medium: 'outlined',
    high: 'contained'
  }

  return <MUIButton
    onClick={ onClick }
    variant={ variants[emphasis] }
    { ...style }
  >
    { label }
  </MUIButton>
}
