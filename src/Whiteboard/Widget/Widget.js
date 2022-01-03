import { useCallback } from 'react'
import { useWidgets } from 'Whiteboard/widgetState'
import WidgetRegistry from 'Whiteboard/Widget/WidgetRegistry'

export default function Widget({ widget }) {
  const isSelectedSelector = useCallback((state) => state.selected === widget.id,
    [widget]
  )

  const isEditingSelector = useCallback((state) => state.editing === widget.id,
    [widget]
  )

  const isSelected = useWidgets(isSelectedSelector)
  const isEditing = useWidgets(isEditingSelector)

  return WidgetRegistry.widget({ widget: widget, isSelected: isSelected, isEditing: isEditing })
}
