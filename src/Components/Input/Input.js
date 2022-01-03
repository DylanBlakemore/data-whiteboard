import React from 'react'
import ColorPicker from '../ColorPicker'

export default function Input({ type, ...inputProps }) {
  switch(type) {
    case 'color':
      return <ColorPicker { ...inputProps } />
    default:
      return null
  }
}
