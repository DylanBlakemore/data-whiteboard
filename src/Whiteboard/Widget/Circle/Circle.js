import { Circle as KonvaCircle } from 'react-konva'
import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'
import { circularPosition } from 'Whiteboard/utils'

export const circleProperties = {
  name: 'Circle',
  category: 'Shapes',
  icon: {
    icon: 'circle'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    radius: 50,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: 'black',
    position: circularPosition
  },
  renderFn: Circle
}

export default function Circle({ id, isSelected, type, ...widgetProps }) {
  const groupProps = (({ x, y, height, width }) => ({ x, y, height, width }))(widgetProps)
  const { x, y, height, width, ...circleProps } = widgetProps
  const diameter = widgetProps.radius * 2

  const transform = (node, scaleX, _) => {
    return {
      x: node.x(),
      y: node.y(),
      radius: node.width() * scaleX / 2
    }
  }

  const transformProps = {
    enabledAnchors: [
      'top-left',
      'top-right',
      'bottom-right',
      'bottom-left'
    ]
  }

  return <ManipulatedWidget
    groupProps={ { ...groupProps, width: diameter, height: diameter } }
    id={ id }
    transform={ transform }
    isSelected={ isSelected }
    transformerProps={ transformProps }
  >
    <KonvaCircle
      { ...circleProps }
    />
  </ManipulatedWidget>
}
