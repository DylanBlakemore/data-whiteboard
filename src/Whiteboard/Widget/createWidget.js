import { addWidget } from 'Whiteboard/widgetState'
import WidgetRegistry from 'Whiteboard/Widget/WidgetRegistry'

export default function createWidget({ x, y, type }) {
  const widget = WidgetRegistry.indexedWidgets[type]
  const properties = widget.defaults
  const position = widget.position({
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
