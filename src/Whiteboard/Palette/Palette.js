import './Palette.scss'

import React from 'react'

import { DRAG_DATA_KEY, WIDGET_TYPES } from 'Whiteboard/Widget/constants'

const handleDragStart = (event) => {
  const type = event.target.dataset.widget

  if (type) {
    // x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
    const offsetX = event.nativeEvent.offsetX
    const offsetY = event.nativeEvent.offsetY

    // dimensions of the node on the browser
    const clientWidth = event.target.clientWidth
    const clientHeight = event.target.clientHeight

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight
    })

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload)
  }
}

export default function Palette() {
  return (
    <aside className='palette'>
      <h2>Widgets</h2>
      <div
        className='widget rectangle'
        data-widget={ WIDGET_TYPES.RECT }
        draggable
        onDragStart={ handleDragStart }
      />
      <div
        className='widget circle'
        data-widget={ WIDGET_TYPES.CIRCLE }
        draggable
        onDragStart={ handleDragStart }
      />
    </aside>
  )
}
