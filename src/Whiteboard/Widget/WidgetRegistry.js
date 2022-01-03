import lodash from 'lodash'
import Rectangle, { rectangleProperties } from 'Whiteboard/Widget/Rectangle'
import Circle, { circleProperties } from 'Whiteboard/Widget/Circle'
import Chart, { barChartProperties, pieChartProperties, lineChartProperties } from 'Whiteboard/Widget/Chart'
import Text, { textProperties } from 'Whiteboard/Widget/Text'

export default class WidgetRegistry {

  static widgets = [
    textProperties,
    rectangleProperties,
    circleProperties,
    barChartProperties,
    pieChartProperties,
    lineChartProperties
  ]

  static categories() {
    return lodash.groupBy(WidgetRegistry.widgets, 'category')
  }

  static indexedWidgets = lodash.keyBy(WidgetRegistry.widgets, 'type')

  static widget = ({ widget, isSelected, isEditing }) => {
    switch(widget.type) {
      case rectangleProperties.type:
        return <Rectangle { ...widget } isSelected={isSelected} isEditing={isEditing} />
      case circleProperties.type:
        return <Circle { ...widget } isSelected={isSelected} isEditing={isEditing} />
      case barChartProperties.type:
        return <Chart { ...widget } isSelected={isSelected} isEditing={isEditing} />
      case pieChartProperties.type:
        return <Chart { ...widget } isSelected={isSelected} isEditing={isEditing} />
      case lineChartProperties.type:
        return <Chart { ...widget } isSelected={isSelected} isEditing={isEditing} />
      case textProperties.type:
        return <Text { ...widget } isSelected={isSelected} isEditing={isEditing} />
      default:
        return null
    }
  }

}
