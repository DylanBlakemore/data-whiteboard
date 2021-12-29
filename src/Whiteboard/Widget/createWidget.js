import { addWidget } from 'Whiteboard/widgetState'
import { indexedWidgets } from 'Whiteboard/Widget/widgetTypes'

export default function createWidget({ x, y, type }) {
  const properties = indexedWidgets[type].properties
  const position = indexedWidgets[type].position({
    x: x,
    y: y,
    width: properties.width,
    height: properties.height
  })

  addWidget({
    ...properties,
    ...position,
    type: type
  })
}
