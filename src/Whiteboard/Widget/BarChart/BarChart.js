import React from 'react'
import { Rect as KonvaRectangle, Image as KonvaImage } from 'react-konva'

import ManipulatedWidget from 'Whiteboard/Widget/ManipulatedWidget'
import { useChartImage } from 'Whiteboard/Widget/BarChart/useChartImage'
import { rectangularPosition } from 'Whiteboard/utils'

export const barChartProperties = {
  name: 'Bar chart',
  category: 'Charts',
  icon: {
    icon: 'chart-bar'
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
  renderFn: BarChart
}

export default function BarChart({ type, isSelected, id, ...widgetProps }) {
  const groupProps = (({ x, y, width, height }) => ({ x, y, width, height }))(widgetProps)
  const { x, y, ...rectProps } = widgetProps
  const { width, height } = widgetProps

  const spec = {
    '$schema': 'https://vega.github.io/schema/vega-lite/v5.json',
    'description': 'A simple bar chart with embedded data.',
    'data': {
      'values': [
        {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
        {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
        {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
      ]
    },
    'height': height,
    'width': width,
    'mark': 'bar',
    'background': null,
    'encoding': {
      'x': {'field': 'a', 'type': 'nominal', 'axis': {'labelAngle': 0}},
      'y': {'field': 'b', 'type': 'quantitative'}
    }
  }

  const chartImage = useChartImage(spec)

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
