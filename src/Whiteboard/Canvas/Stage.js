import React from 'react'
import { Layer, Stage as KonvaStage } from 'react-konva'
import { useWidgets, clearSelection } from 'Whiteboard/widgetState'
import Widget from 'Whiteboard/Widget'
import { useStage, updateStage } from 'Whiteboard/stageState'

export default function Stage({ stageRef }) {
  const widgets = useWidgets((state) => Object.entries(state.widgets))
  const stage = useStage()

  const handleWheel = (e) => {
    e.evt.preventDefault()

    const scaleBy = 1.02
    const stage = e.target.getStage()
    const oldScale = stage.scaleX()
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    }

    const newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy

    updateStage({
      scale: newScale,
      x: (stage.getPointerPosition().x / newScale - mousePointTo.x) * newScale,
      y: (stage.getPointerPosition().y / newScale - mousePointTo.y) * newScale
    })
  }

  const width = window.innerWidth
  const height = window.innerHeight

  return <KonvaStage
    width={ width - 402 }
    height={ height }
    ref={ stageRef }
    onClick={ clearSelection }
    draggable
    onWheel={ handleWheel }
    scaleX={ stage.scale }
    scaleY={ stage.scale }
    x={ stage.x }
    y={ stage.y }
  >
    <Layer>
      {
        widgets.map(([key, widget]) => (
          <Widget key={ key } widget={ { ...widget, id: key } } stage={ stageRef } />
        ))
      }
    </Layer>
  </KonvaStage>
}
