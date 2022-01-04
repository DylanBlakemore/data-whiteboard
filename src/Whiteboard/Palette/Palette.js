import './Palette.scss'

import React from 'react'

import lodash from 'lodash'
import { DRAG_DATA_KEY } from 'Whiteboard/Widget/constants'
import { Icon } from './Icon'
import Accordion from 'Components/Accordion'
import WidgetRegistry from 'Whiteboard/Widget/WidgetRegistry'

const handleDragStart = (event) => {
  const type = event.target.dataset.widget

  if (type) {
    const dragPayload = JSON.stringify({ type })
    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload)
  }
}

export default function Palette() {
  const registeredWidgets = WidgetRegistry.categories()
  const widgets = lodash.map(Object.keys(registeredWidgets), (category) => {
    return {
      title: category,
      key: `${category}-widget-category`,
      body: <div className='section'>
        {lodash.map(registeredWidgets[category], ({ icon, type }) => {
          return <Icon
            icon={ icon.icon }
            widget={ type }
            onDragStart={ handleDragStart }
            size={ 'lg' }
            key={ type }
            style={ icon?.style || 'far' }
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
