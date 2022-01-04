import './PropertiesPanel.scss'

import React from 'react'
import lodash from 'lodash'

import { useWidgets } from 'Whiteboard/widgetState'
import ShapeProperties from './ShapeProperties'
import TextProperties from './TextProperties'
import Accordion from 'Components/Accordion'
import ChartProperties from './ChartProperties'

const SHAPE_PROPS = [
  { name: 'stroke', label: 'Stroke', input: 'color' },
  { name: 'fill', label: 'Fill', input: 'color' },
  { name: 'shadowColor', label: 'Shadow', input: 'color' }
]

const TEXT_PROPS = [
  { name: 'textColor', label: 'Color', input: 'color' }
]

export default function PropertiesPanel() {
  const selectedWidget = useWidgets((state) => state.widgets[state.selected])

  const shapeProps = selectedWidget && lodash.filter(SHAPE_PROPS, ({ name }) => name in selectedWidget)
  const shapePropSection = selectedWidget && shapeProps?.length > 0 && {
    title: 'Shape',
    key: 'shape-property-section',
    body: <ShapeProperties
      properties={ shapeProps }
      selectedWidget={ selectedWidget }
    />
  }

  const textProps = selectedWidget && lodash.filter(TEXT_PROPS, ({ name }) => name in selectedWidget)
  const textPropsSection = selectedWidget && textProps?.length > 0 && {
    title: 'Text',
    key: 'text-property-section',
    body: <TextProperties
      properties={ textProps }
      selectedWidget={ selectedWidget }
    />
  }

  const chartPropsSection = selectedWidget && ('spec' in selectedWidget) && {
    title: 'Chart',
    key: 'chart-property-section',
    body: <ChartProperties
      selectedWidget={ selectedWidget }
    />
  }

  const propertySections = lodash.compact([
    shapePropSection,
    textPropsSection,
    chartPropsSection
  ])

  return <div>
    <aside className='panel'>
      <h2>Properties</h2>
      <div className='properties'>
        {
          selectedWidget && <Accordion items={ propertySections } />
        }
      </div>
    </aside>
  </div>
}
