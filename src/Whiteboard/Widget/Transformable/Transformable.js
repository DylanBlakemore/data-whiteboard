import React from 'react'
import { Transformer } from 'react-konva'

export default function Transformable({ children, transformerRef, isSelected }) {
  return <>
    { children }
    {isSelected && (
      <Transformer
        anchorSize={ 5 }
        borderDash={ [6, 2] }
        ref={ transformerRef }
      />
    )}
  </>
}
