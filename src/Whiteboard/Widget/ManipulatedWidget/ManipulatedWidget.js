import React, { useRef, useEffect, useCallback } from 'react'
import { Group } from 'react-konva'
import Transformable from 'Whiteboard/Widget/Transformable'
import EditableText from 'Whiteboard/Widget/Text/EditableText'
import { scale, showTransformer } from 'Whiteboard/utils'
import { selectWidget, moveWidget, updateWidget, updateAttribute, editWidget, cancelEditing } from 'Whiteboard/widgetState'
import { useKeypress } from 'Hooks'
import { deleteSelected } from 'Whiteboard/widgetState'

export default function ManipulatedWidget({
  isSelected,
  isEditing,
  id,
  transform,
  groupProps,
  children,
  transformerProps = {},
  hasText = false,
  textProps = {}
}) {

  const widgetRef = useRef()
  const transformerRef = useRef()

  useKeypress('Backspace', () => {
    if (!isEditing) deleteSelected()
  })

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

  const handleDoubleClick = () => {
    if (hasText && !isEditing) editWidget(id)
  }

  const handleTextChange = (event) => {
    updateAttribute('text', event.target.value)
  }

  return  <Transformable
    transformerRef={ transformerRef }
    isSelected={ isSelected }
    { ...transformerProps }
  >
    <Group
      draggable
      x={ groupProps.x }
      y={ groupProps.y }
      width={ groupProps.width }
      height={ groupProps.height }
      ref={ widgetRef }
      onClick={ handleSelect }
      onTap={ handleSelect }
      onDragStart={ handleSelect }
      onDragEnd={ handleDrag }
      onTransformEnd={ handleTransform }
      onDblClick={ handleDoubleClick }
    >
      { children }
      {
        hasText
          ? <EditableText
              id={ id }
              isEditing={ isEditing }
              { ... textProps }
              x={ groupProps.x }
              y={ groupProps.y }
              width={ groupProps.width }
              height={ groupProps.height }
              handleEscape={ cancelEditing }
              onTextChange={ handleTextChange }
            />
          : null
      }
    </Group>
  </Transformable>
}
