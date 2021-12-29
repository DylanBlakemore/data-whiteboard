import React, { useRef, useEffect, useCallback } from 'react'
import embed from 'vega-embed'
import { scale, showTransformer } from 'Whiteboard/utils'
import { selectWidget, moveWidget, updateWidget } from 'Whiteboard/widgetState'
import DivWidget from 'Whiteboard/Widget/DivWidget'
import Transformable from 'Whiteboard/Widget/Transformable'

const transform = (node, id, _) => {
  const { scaleX, scaleY } = scale(node)

  updateWidget(id, {
    x: node.x(),
    y: node.y(),
    rotation: node.rotation(),
    width: node.width() * scaleX,
    height: node.height() * scaleY
  })
}

export default function BarChart({ type, isSelected, id, ...widgetProps }) {

  const widgetRef = useRef()
  const transformerRef = useRef()
  const vegaRef = useRef(null)

  useEffect(() => {
    showTransformer(widgetRef, transformerRef, isSelected)
  }, [isSelected])

  const handleSelect = useCallback((event) => {
      event.cancelBubble = true
      selectWidget(id)
    }, [id])

  const handleDrag = useCallback((event) => {
      moveWidget(id, event)
    }, [id])

  const handleTransform = useCallback((event) => {
    transform(widgetRef.current, id, event)
    }, [id])

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
    'height': 'container',
    'width': 'container',
    'mark': 'bar',
    'background': null,
    'encoding': {
      'x': {'field': 'a', 'type': 'nominal', 'axis': {'labelAngle': 0}},
      'y': {'field': 'b', 'type': 'quantitative'}
    }
  }

  useEffect(() => {
    embed(vegaRef.current, spec, { renderer: 'svg', actions: false })
  })

  return <Transformable
    transformerRef={ transformerRef }
    isSelected={ isSelected }
  >
    <DivWidget
      widgetProps={ widgetProps }
      widgetRef={ widgetRef }
      onClick={ handleSelect }
      onTap={ handleSelect }
      onDragStart={ handleSelect }
      onDragEnd={ handleDrag }
      onTransformEnd={ handleTransform }
    >
      <div
        ref={ vegaRef }
        style={ { height: widgetProps.height-6, width: widgetProps.width-6, padding: '3px' } }
      />
    </DivWidget>
  </Transformable>
}
