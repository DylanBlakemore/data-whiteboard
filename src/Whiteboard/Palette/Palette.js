import './Palette.scss'

import React from 'react'

import { widgetIcons } from './widgetIcons'
import lodash from 'lodash'
import { DRAG_DATA_KEY } from 'Whiteboard/Widget/constants'
import { Icon } from './Icon'
import Accordion from 'Components/Accordion'

const handleDragStart = (event) => {
  const type = event.target.dataset.widget

  if (type) {
    const offsetX = event.nativeEvent.offsetX
    const offsetY = event.nativeEvent.offsetY

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
  const widgets = lodash.map(widgetIcons, ({ title, key, widgets }) => {
    return {
      title: title,
      key: key,
      body: <div className='section'>
        {lodash.map(widgets, ({ icon, widget }) => {
          return <Icon
            icon={ icon }
            widget={ widget }
            onDragStart={ handleDragStart }
            size={ 'lg' }
          />
        })}
      </div>
    }
  })

  return <aside className='palette'>
    <h2>Widgets</h2>
    <Accordion items={ widgets } />
  </aside>
}
