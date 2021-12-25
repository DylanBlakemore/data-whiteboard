import './Canvas.scss'

import React, { useRef, useCallback } from 'react'
import { Layer, Stage } from 'react-konva'

import { useWidgets, clearSelection, } from 'Whiteboard/state'
import { DRAG_DATA_KEY } from 'Whiteboard/Widget/constants'
import { createWidget } from 'Whiteboard/Widget/actions'
import Widget from 'Whiteboard/Widget'

const handleDragOver = (event) => event.preventDefault();

export default function Canvas() {
  const widgets = useWidgets((state) => Object.entries(state.widgets))
  const stageRef = useRef()

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY)

    if (draggedData) {
      const { type } = JSON.parse(draggedData)
      stageRef.current.setPointersPositions(event)
      const coords = stageRef.current.getPointerPosition()
      createWidget[type](coords)
    }
  }, [])

  return <main className='canvas' onDrop={ handleDrop } onDragOver={ handleDragOver }>
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
}
