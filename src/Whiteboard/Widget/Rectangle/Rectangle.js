import { Rect as KonvaRectangle } from 'react-konva'
import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'

export default function Rectangle({ id, isSelected, isEditing, type, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, textColor, text, fontSize, ...rectProps } = widgetProps

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
    hasText={ true }
    isEditing={ isEditing }
    textProps={{
      textColor,
      text,
      fontSize
    }}
  >
    <KonvaRectangle
      { ...rectProps }
    />
  </ManipulatedWidget>
}
