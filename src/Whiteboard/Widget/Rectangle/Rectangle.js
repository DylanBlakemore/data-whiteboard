import { Rect as KonvaRectangle } from 'react-konva'
import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'
import { rectangularPosition } from 'Whiteboard/utils'

export const rectangleProperties = {
  name: 'Rectangle',
  category: 'Shapes',
  icon: {
    icon: 'square'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    width: 150,
    height: 100,
    cornerRadius: 10,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: 'black',
    position: rectangularPosition
  },
  renderFn: Rectangle
}

export default function Rectangle({ id, isSelected, type, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, ...rectProps } = widgetProps

  const transform = (node, scaleX, scaleY) => ({
    x: node.x(),
    y: node.y(),
    width: node.width() * scaleX,
    height: node.height() * scaleY
  })

  return <ManipulatedWidget
    groupProps={ groupProps }
    id={ id }
    transform={ transform }
    isSelected={ isSelected }
  >
    <KonvaRectangle
      { ...rectProps }
    />
  </ManipulatedWidget>
}
