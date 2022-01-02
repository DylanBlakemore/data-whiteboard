import React, { useRef, useEffect, useCallback, useState } from 'react'
import { Text as KonvaText } from 'react-konva'
import { Html } from 'react-konva-utils'

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

const style = (width, height) => {
  return {
    width: `${width}px`,
    height: `${height}px`,
    border: "none",
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    colour: "black",
    fontSize: "16px",
    fontFamily: "sans-serif"
  }
}

const RETURN_KEY = 13
const ESCAPE_KEY = 27

export default function Text({ id, isSelected, type, ...widgetProps }) {
  const widgetRef = useRef()
  const transformerRef = useRef()
  const [isEditing, setEditing] = useState(false)

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

  const handleEscapeKeys = (event) => {
    if ((event.keyCode === RETURN_KEY && !event.shiftKey) || event.keyCode === ESCAPE_KEY) {
      setEditing(false)
    }
  }

  const editableInput = <Html groupProps={ {...widgetProps} } divProps={{ style: { opacity: 1 } }}>
    <textarea
      onChange={ () => {}}
      style={ style(widgetProps.width, widgetProps.height) }
      onKeyDown={ handleEscapeKeys }
    />
  </Html>

  const startEditing = () => {
    setEditing(true)
  }

  return isEditing
    ? editableInput
    : <Transformable
      transformerRef={ transformerRef }
      isSelected={ isSelected }
    >
      <KonvaText
        onDblClick={ startEditing }
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
