import { createStore } from '@halka/state'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { clamp } from 'clamp'

import { WIDGET_TYPES, DEFAULTS, LIMITS } from './Widget/constants'

const baseState = {
  selected: null,
  widgets: {}
}

export const useWidgets = createStore(baseState)
const setState = (fn) => useWidgets.set(produce(fn))

export const createRectangle = ({ x, y }) => {
  setState((state) => {
    state.widgets[nanoid()] = {
      type: WIDGET_TYPES.RECT, // rect
      width: DEFAULTS.RECT.WIDTH, // 150
      height: DEFAULTS.RECT.HEIGHT, // 100
      fill: DEFAULTS.RECT.FILL, // #ffffff
      stroke: DEFAULTS.RECT.STROKE, // #000000
      rotation: DEFAULTS.RECT.ROTATION, // 0
      x,
      y
    }
  })
}

export const createCircle = ({ x, y }) => {
  setState((state) => {
    state.widgets[nanoid()] = {
      type: WIDGET_TYPES.CIRCLE, // circle
      radius: DEFAULTS.CIRCLE.RADIUS, // 50
      fill: DEFAULTS.CIRCLE.FILL, // white
      stroke: DEFAULTS.CIRCLE.STROKE, // black
      x,
      y
    }
  })
}

export const selectWidget = (id) => {
  setState((state) => {
    state.selected = id
  })
}

export const clearSelection = () => {
  setState((state) => {
    state.selected = null
  })
}

export const moveWidget = (id, event) => {
  setState((state) => {
    const widget = state.widgets[id]

    if (widget) {
      widget.x = event.target.x()
      widget.y = event.target.y()
    }
  })
}

export const transformRectangleWidget = (node, id, event) => {
  // transformer is changing scale of the node
  // and NOT its width or height
  // but in the store we have only width and height
  // to match the data better we will reset scale on transform end
  const scaleX = node.scaleX()
  const scaleY = node.scaleY()

  // we will reset the scale back
  node.scaleX(1)
  node.scaleY(1)

  setState((state) => {
    const widget = state.widgets[id]

    if (widget) {
      widget.x = node.x()
      widget.y = node.y()
      
      widget.rotation = node.rotation()
      
       widget.width = clamp(
        // increase the width in order of the scale
        node.width() * scaleX,
        // should not be less than the minimum width
        LIMITS.RECT.MIN,
        // should not be more than the maximum width
        LIMITS.RECT.MAX
      )
      widget.height = clamp(
        node.height() * scaleY,
        LIMITS.RECT.MIN,
        LIMITS.RECT.MAX
      )
    }
  })
}
