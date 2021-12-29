import { WIDGET_TYPES } from 'Whiteboard/Widget/constants'
import { snap } from 'Whiteboard/utils'
import lodash from 'lodash'

const rectangularPosition = ({ x, y, height, width }) => {
  return {
    x: snap(x - width / 2),
    y: snap(y - height / 2)
  }
}

const circularPosition = ({ x, y }) => {
  return {
    x: snap(x),
    y: snap(y)
  }
}

const shadow = {
  shadowBlur:  5,
  shadowOffset: { x: 2, y: 2 },
  shadowOpacity:  0.5,
  shadowColor: 'black'
}

export const widgetTypes = [
  {
    title: 'Miscellaneous',
    key: 'misc',
    widgets: [
      {
        icon: 'font',
        widget: WIDGET_TYPES.TEXT,
        iconStyle: 'fas',
        position: rectangularPosition,
        properties: {
          width: 150,
          height: 50
        }
      }
    ]
  },
  {
    title: 'Shapes',
    key: 'shapes',
    widgets: [
      {
        icon: 'square',
        widget: WIDGET_TYPES.RECT,
        position: rectangularPosition,
        properties: {
          stroke: '#ffffff',
          fill: '#ffffff',
          width: 150,
          height: 100,
          rotation: 0,
          cornerRadius: 10,
          ...shadow
        }
      },
      {
        icon: 'circle',
        widget: WIDGET_TYPES.CIRCLE,
        position: circularPosition,
        properties: {
          stroke: '#ffffff',
          fill: '#ffffff',
          radius: 50,
          ...shadow
        }
      }
    ]
  },
  {
    title: 'Charts',
    key: 'charts',
    widgets: [
      {
        icon: 'chart-bar',
        widget: WIDGET_TYPES.BAR_CHART,
        position: rectangularPosition,
        properties: {
          stroke: '#ffffff',
          fill: '#ffffff',
          width: 150,
          height: 100,
          cornerRadius: 10,
          ...shadow
        }
      }
    ]
  }
]

export const indexedWidgets = lodash.keyBy(
  lodash.flatMap(widgetTypes, (widgetType) => {
    return widgetType.widgets
  }), 'widget'
)
