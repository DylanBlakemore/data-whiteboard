import React, { useCallback } from 'react'

import { WIDGET_TYPES } from './constants'
import { useWidgets } from 'Whiteboard/state'
import Circle from './Circle'
import Rectangle from './Rectangle'

export default function Widget({ widget }) {
  const isSelectedSelector = useCallback(
    (state) => state.selected === widget.id,
    [widget]
  )

  const isSelected = useWidgets(isSelectedSelector)

  if (widget.type === WIDGET_TYPES.RECT) {
      return <Rectangle {...widget} isSelected={ isSelected } />
  } else if (widget.type === WIDGET_TYPES.CIRCLE) {
      return <Circle {...widget} isSelected={ isSelected } />
  }

  return null
}
