import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'

export default function Text({ id, isSelected, isEditing, type, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, ...textProps } = widgetProps

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
    textProps={ textProps }
    isEditing={ isEditing }
  />
}
