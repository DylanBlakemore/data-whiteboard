import React, { useState, useCallback } from 'react'
import { CompactPicker } from 'react-color'

import Button from '../Button'

export default function ColorPicker({ value, onChange, name }) {
  const [displayPicker, setDisplayColorPicker] = useState(false)

  const changeAndClose = useCallback((newValue) => {
    onChange({ value: newValue.hex, name })
    setDisplayColorPicker(false)
  }, [name, onChange])

  return displayPicker
    ? <CompactPicker
        color={ value }
        onChange={ changeAndClose }
      />
    : <Button
        onClick={ () => setDisplayColorPicker(true) }
        emphasis={ 'medium' }
        style={{
          backgroundColor: value
        }}
        label={ name }
      />
}



