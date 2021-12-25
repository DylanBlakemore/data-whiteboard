import { createStore } from '@halka/state'
import produce from 'immer'
import { nanoid } from 'nanoid'

const baseState = {
  selected: null,
  widgets: {}
}

export const useWidgets = createStore(baseState)

const setState = (fn) => useWidgets.set(produce(fn))

export const addWidget = (widget) => {
  setState((state) => {
    state.widgets[nanoid()] = widget
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

export const updateWidget = (id, widget) => {
  setState((state) => {
    state.widgets[id] = {
      ...state.widgets[id],
      ...widget
    }
  })
}
