import React, { useRef, useEffect, useCallback } from 'react'
import { Group } from 'react-konva'
import Transformable from 'Whiteboard/Widget/Transformable'
import { scale, showTransformer } from 'Whiteboard/utils'
import { selectWidget, moveWidget, updateWidget } from 'Whiteboard/widgetState'

export default function ManipulatedWidget({ isSelected, id, transform, groupProps, children, transformerProps = {} }) {

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

  const handleTransform = useCallback(() => {
    const node = widgetRef.current
    const { scaleX, scaleY } = scale(node)
    updateWidget(id, transform(widgetRef.current, scaleX, scaleY))
  }, [id, transform])

  return  <Transformable
    transformerRef={ transformerRef }
    isSelected={ isSelected }
    { ...transformerProps }
  >
    <Group
      draggable
      { ...groupProps }
      ref={ widgetRef }
      onClick={ handleSelect }
      onTap={ handleSelect }
      onDragStart={ handleSelect }
      onDragEnd={ handleDrag }
      onTransformEnd={ handleTransform }
    >
      { children }
    </Group>
  </Transformable>
}
