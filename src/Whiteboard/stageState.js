import { createStore } from '@halka/state'
import produce from 'immer'

const baseState = {
  scale: 1,
  x: 0,
  y: 0
}

export const useStage = createStore(baseState)

export const setStage = (fn) => useStage.set(produce(fn))

export const updateStage = ({ scale, x, y }) => {
  setStage((state) => {
    state.x = x
    state.y = y
    state.scale = scale
  })
}
