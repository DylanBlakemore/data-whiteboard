import './Canvas.scss'

import React, { useRef, useCallback } from 'react'
import { Layer, Stage } from 'react-konva'

import { useWidgets, createCircle, createRectangle, clearSelection } from 'Whiteboard/state'
import { DRAG_DATA_KEY, WIDGET_TYPES } from 'Whiteboard/Widget/constants'
import Widget from 'Whiteboard/Widget'

const handleDragOver = (event) => event.preventDefault();

export default function Canvas() {
  const widgets = useWidgets((state) => Object.entries(state.widgets))
  const stageRef = useRef()

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY)

    if (draggedData) {
      const { offsetX, offsetY, type, clientHeight, clientWidth } = JSON.parse(
        draggedData
      )

      stageRef.current.setPointersPositions(event)

      const coords = stageRef.current.getPointerPosition()

      if (type === WIDGET_TYPES.RECT) {
        // rectangle x, y is at the top,left corner
        createRectangle({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        })
      } else if (type === WIDGET_TYPES.CIRCLE) {
        // circle x, y is at the center of the circle
        createCircle({
          x: coords.x - (offsetX - clientWidth / 2),
          y: coords.y - (offsetY - clientHeight / 2),
        })
      }
    }
  }, [])

  return (
    <main className='canvas' onDrop={ handleDrop } onDragOver={ handleDragOver }>
      <Stage
        width={ window.innerWidth - 400 }
        height={ window.innerHeight }
        ref={ stageRef }
        onClick={ clearSelection }
      >
        <Layer>
          {
            widgets.map(([key, widget]) => (
              <Widget key={key} widget={{ ...widget, id: key }} />
            ))
          }
        </Layer>
      </Stage>
    </main>
  )
}
