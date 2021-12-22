import React, { useRef, useEffect, useCallback } from 'react'
import { Rect as KonvaRectangle, Transformer } from 'react-konva'

import { LIMITS } from 'Whiteboard/Widget/constants'
import { selectWidget, transformRectangleWidget, moveWidget } from 'Whiteboard/state'

const boundBoxCallbackForRectangle = (oldBox, newBox) => {
  if (
    newBox.width < LIMITS.RECT.MIN ||
    newBox.height < LIMITS.RECT.MIN ||
    newBox.width > LIMITS.RECT.MAX ||
    newBox.height > LIMITS.RECT.MAX
  ) {
    return oldBox
  }
  return newBox
}

export default function Rectangle({ id, isSelected, type, ...widgetProps }) {
  const widgetRef = useRef()
  const transformerRef = useRef()

  useEffect(() => {
    if (isSelected) {
      transformerRef.current.nodes([widgetRef.current])
      transformerRef.current.getLayer().batchDraw()
    }
  }, [isSelected])

  const handleSelect = useCallback(
    (event) => {
      event.cancelBubble = true
      selectWidget(id)
    },
    [id]
  )

  const handleDrag = useCallback(
    (event) => {
      moveWidget(id, event)
    },
    [id]
  )

  const handleTransform = useCallback(
    (event) => {
      transformRectangleWidget(widgetRef.current, id, event)
    },
    [id]
  )

  return (
    <>
      <KonvaRectangle
        onClick={ handleSelect }
        onTap={ handleSelect }
        onDragStart={ handleSelect }
        ref={ widgetRef }
        { ...widgetProps }
        draggable
        onDragEnd={ handleDrag }
        onTransformEnd={ handleTransform }
      />
      {isSelected && (
        <Transformer
          anchorSize={ 5 }
          borderDash={ [6, 2] }
          ref={ transformerRef }
          boundBoxFunc={ boundBoxCallbackForRectangle }
        />
      )}
    </>
  )
}
