import './Canvas.scss'

import React, { useRef, useCallback } from 'react'

import { DRAG_DATA_KEY } from 'Whiteboard/Widget/constants'
import createWidget from 'Whiteboard/Widget/createWidget'
import Stage from './Stage'

const handleDragOver = (event) => event.preventDefault()

function downloadURI(uri, name) {
  var link = document.createElement('a')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Canvas() {
  const stageRef = useRef()

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY)

    if (draggedData) {
      const { type } = JSON.parse(draggedData)
      stageRef.current.setPointersPositions(event)
      const coords = stageRef.current.getPointerPosition()
      createWidget({ ...coords, type: type })
    }
  }, [])

  const handleExport = () => {
    const uri = stageRef.current.toDataURL()
    console.log(uri)
    downloadURI(uri, 'stage.png')
  }

  return <main
    className={ `canvas` }
    onDrop={ handleDrop }
    onDragOver={ handleDragOver }
    id='canvas-main'
  >
    <button onClick={ handleExport }>Click here to log stage data URL</button>
    <Stage stageRef={ stageRef }/>
  </main>
}
