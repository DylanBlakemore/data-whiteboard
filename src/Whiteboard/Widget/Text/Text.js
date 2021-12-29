import React, { useRef, useEffect, useCallback } from 'react'
import { Text as KonvaText } from 'react-konva'

import { scale, showTransformer } from 'Whiteboard/utils'
import { selectWidget, moveWidget, updateWidget } from 'Whiteboard/widgetState'
import Transformable from 'Whiteboard/Widget/Transformable'

const transform = (node, id, _) => {
  const { scaleX, scaleY } = scale(node)

  updateWidget(id, {
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    width: node.width() * scaleX,
    height: node.height() * scaleY
  })
}

export default function Text({ id, isSelected, type, ...widgetProps }) {
  const widgetRef = useRef()
  const transformerRef = useRef()

  useEffect(() => {
    showTransformer(widgetRef, transformerRef, isSelected)
  }, [isSelected])

  const handleSelect = useCallback((event) => {
      event.cancelBubble = true
      selectWidget(id)
    }, [id])

  const handleDrag = useCallback((event) => {
      moveWidget(id, event)
    }, [id])

  const handleTransform = useCallback((event) => {
    transform(widgetRef.current, id, event)
    }, [id])

  return <Transformable
    transformerRef={ transformerRef }
    isSelected={ isSelected }
  >
    <KonvaText
      onClick={ handleSelect }
      onTap={ handleSelect }
      onDragStart={ handleSelect }
      ref={ widgetRef }
      { ...widgetProps }
      draggable
      onDragEnd={ handleDrag }
      onTransformEnd={ handleTransform }
      text={ "Some text" }
      fontSize={ 18 }
      fill={ '#555' }
      padding={ 20 }
      align={ 'center' }
      verticalAlign={ 'middle' }
    />
  </Transformable>
}
