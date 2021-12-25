import { WIDGET_TYPES } from 'Whiteboard/Widget/constants'

export const widgetIcons = [
  {
    title: 'Shapes',
    key: 'shapes',
    widgets: [
      {
        icon: 'square',
        widget: WIDGET_TYPES.RECT
      },
      {
        icon: 'circle',
        widget: WIDGET_TYPES.CIRCLE
      }
    ]
  },
  {
    title: 'Charts',
    key: 'charts',
    widgets: [
      {
        icon: 'chart-bar',
        widget: WIDGET_TYPES.BAR_CHART
      }
    ]
  }
]
