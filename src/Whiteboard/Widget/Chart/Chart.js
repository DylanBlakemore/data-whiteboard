import React, { useState, useEffect } from 'react'
import { Rect as KonvaRectangle, Image as KonvaImage } from 'react-konva'

import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'
import { generateChartImage } from 'Whiteboard/Widget/Chart/generateChartImage'

export default function Chart({ type, isSelected, isEditing, id, spec, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, ...rectProps } = widgetProps
  const { width, height } = widgetProps

  const [chartImage, setChartImage] = useState(null)
  useEffect(() => {
    generateChartImage(
      { ...spec, width: width, height: height, background: null },
      (image) => setChartImage(image)
    )
  })
  

  // const chartImage = useChartImage()

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
    {chartImage && <KonvaImage
      width={ width }
      height={ height}
      image={ chartImage }
    />}
  </ManipulatedWidget>
}
