import { createStore } from '@halka/state'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { snap } from 'Whiteboard/utils'

const baseState = {
  selected: null,
  widgets: {},
  editing: null
}

export const useWidgets = createStore(baseState)

const setState = (fn) => useWidgets.set(produce(fn))

export const addWidget = (widget) => {
  setState((state) => {
    const key = nanoid()
    state.widgets[key] = widget
    state.selected = key
  })
}

export const selectWidget = (id) => {
  setState((state) => {
    state.selected = id
  })
}

export const editWidget = (id) => {
  setState((state) => {
    state.editing = id
  })
}

export const clearSelection = () => {
  setState((state) => {
    state.selected = null
    state.editing = null
  })
}

export const cancelEditing = () => {
  setState((state) => { state.editing = null })
}

export const deleteSelected = () => {
  setState((state) => {
    state.widgets[state.selected] = null
    state.selected = null
    state.editing = null
  })
}

export const moveWidget = (id, event) => {
  setState((state) => {
    const widget = state.widgets[id]

    if (widget) {
      widget.x = snap(event.target.x())
      widget.y = snap(event.target.y())
    }
  })
}

export const updateWidget = (id, widget) => {
  setState((state) => {
    const { x, y, width, height, radius, widgetProps } = widget
    state.widgets[id] = {
      ...state.widgets[id],
      ...widgetProps,
      radius: snap(radius),
      x: snap(x),
      y: snap(y),
      height: snap(height),
      width: snap(width)
    }
  })
}

export const updateAttribute = (attr, value) => {
  setState((state) => {
    const widget = state.widgets[state.selected]
    if (widget) {
      widget[attr] = value
    }
  })
}
