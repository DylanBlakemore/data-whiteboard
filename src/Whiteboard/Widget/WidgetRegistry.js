import lodash from 'lodash'
import { rectangleProperties } from 'Whiteboard/Widget/Rectangle/Rectangle'
import { circleProperties } from 'Whiteboard/Widget/Circle/Circle'
import { barChartProperties } from 'Whiteboard/Widget/BarChart/BarChart'

export default class WidgetRegistry {

  static widgets = [
    rectangleProperties,
    circleProperties,
    barChartProperties
  ]

  static categories() {
    return lodash.groupBy(WidgetRegistry.widgets, 'category')
  }

  static indexedWidgets() {
    return lodash.keyBy(WidgetRegistry.widgets, 'name')
  }

}
