import React from 'react'
import { Rect as KonvaRectangle, Group } from 'react-konva'
import { Html } from 'react-konva-utils'

export default function DivWidget({ children, widgetRef, onClick, onTap, onDragStart, onDragEnd, onTransformEnd, widgetProps }) {

  const groupProps = (({ x, y, width, height, rotation }) => ({ x, y, width, height, rotation }))(widgetProps)
  const { x, y, width, height, rotation, ...rectProps } = widgetProps

  return <Group
    draggable
    { ...groupProps }
    ref={ widgetRef }
    onClick={ onClick }
    onTap={ onTap }
    onDragStart={ onDragStart }
    onDragEnd={ onDragEnd }
    onTransformEnd={ onTransformEnd }
  >
    <Html divProps={{ style: { pointerEvents: 'none' } }} >
      { children }
    </Html>
    <KonvaRectangle
      { ...rectProps }
      height={ height }
      width={ width }
    />
  </Group>
}
