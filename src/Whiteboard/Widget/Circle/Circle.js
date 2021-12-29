import React, { useRef, useEffect, useCallback } from 'react'
import { Circle as KonvaCircle } from 'react-konva'

import { scale, showTransformer } from 'Whiteboard/utils'
import { selectWidget, moveWidget, updateWidget } from 'Whiteboard/widgetState'
import Transformable from 'Whiteboard/Widget/Transformable'

const transform = (node, id, _) => {
  const { scaleX } = scale(node)

  updateWidget(id, {
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    radius: node.radius() * scaleX
  })
}

export default function Circle({ id, isSelected, type, ...widgetProps }) {
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
    enabledAnchors={[
      'top-left',
      'top-right',
      'bottom-right',
      'bottom-left',
    ]}
  >
    <KonvaCircle
      onClick={ handleSelect }
      onTap={ handleSelect }
      onDragStart={ handleSelect }
      ref={ widgetRef }
      { ...widgetProps }
      draggable
      onDragEnd={ handleDrag }
      onTransformEnd={ handleTransform }
    />
  </Transformable>
}
