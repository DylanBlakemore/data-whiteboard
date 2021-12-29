import { createStore } from '@halka/state'
import produce from 'immer'

const baseState = {
  scale: 1,
  x: 0,
  y: 0
}

export const useStage = createStore(baseState)

const setState = (fn) => useStage.set(produce(fn))
