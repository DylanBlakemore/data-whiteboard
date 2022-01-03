import React from 'react'
import { Rect as KonvaRectangle, Image as KonvaImage } from 'react-konva'

import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'
import { useChartImage } from 'Whiteboard/Widget/Chart/useChartImage'

export default function Chart({ type, isSelected, isEditing, id, spec, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, ...rectProps } = widgetProps
  const { width, height } = widgetProps

  const chartImage = useChartImage({ ...spec, width: width, height: height, background: null })

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
    isEditing={ isEditing }
  >
    <KonvaRectangle
      { ...rectProps }
      height={ height }
      width={ width }
    />
    <KonvaImage
      width={ width }
      height={ height}
      image={ chartImage }
    />
  </ManipulatedWidget>
}
