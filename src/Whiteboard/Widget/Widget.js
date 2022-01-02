import React, { useCallback } from 'react'

import { WIDGET_TYPES } from './constants'
import { useWidgets } from 'Whiteboard/widgetState'
import Circle from './Circle'
import Rectangle from './Rectangle'
import BarChart from './BarChart'
import Text from './Text/index.js'

export default function Widget({ widget, stage }) {
  const isSelectedSelector = useCallback(
    (state) => state.selected === widget.id,
    [widget]
  )

  const isSelected = useWidgets(isSelectedSelector)

  if (widget.type === WIDGET_TYPES.RECT) {
    return <Rectangle {...widget} isSelected={ isSelected }/>
  } else if (widget.type === WIDGET_TYPES.CIRCLE) {
    return <Circle {...widget} isSelected={ isSelected }/>
  } else if (widget.type === WIDGET_TYPES.BAR_CHART) {
    return <BarChart {...widget} isSelected={ isSelected } stage={ stage }/>
  } else if (widget.type === WIDGET_TYPES.TEXT) {
    return <Text  {...widget} isSelected={ isSelected }/>
  }

  return null
}
