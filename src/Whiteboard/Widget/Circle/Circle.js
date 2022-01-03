import { Circle as KonvaCircle } from 'react-konva'
import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'

export default function Circle({ id, isSelected, isEditing, type, ...widgetProps }) {
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
    isEditing={ isEditing }
  >
    <KonvaCircle
      { ...circleProps }
    />
  </ManipulatedWidget>
}
