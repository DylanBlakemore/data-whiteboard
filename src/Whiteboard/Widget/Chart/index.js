import { rectangularPosition } from 'Whiteboard/utils'

export { default } from './Chart'

export const lineChartProperties = {
  type: 'Line chart',
  category: 'Charts',
  icon: {
    icon: 'chart-line',
    style: 'fas'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    width: 150,
    height: 100,
    cornerRadius: 10,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: '#000000',
    spec: {
      '$schema': 'https://vega.github.io/schema/vega-lite/v5.json',
      'description': 'A simple bar chart with embedded data.',
      'data': {
        'values': [
          {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
          {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
          {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
        ]
      },
      'mark': 'line',
      'encoding': {
        'x': {'field': 'a', 'type': 'nominal'},
        'y': {'field': 'b', 'type': 'quantitative'}
      }
    }
  },
  position: rectangularPosition
}

export const pieChartProperties = {
  type: 'Pie chart',
  category: 'Charts',
  icon: {
    icon: 'chart-pie',
    style: 'fas'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    width: 150,
    height: 100,
    cornerRadius: 10,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: '#000000',
    spec: {
      '$schema': 'https://vega.github.io/schema/vega-lite/v5.json',
      'description': 'A simple bar chart with embedded data.',
      'data': {
        'values': [
          {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
          {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
          {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
        ]
      },
      'mark': 'arc',
      'encoding': {
        'color': {'field': 'a', 'type': 'nominal'},
        'theta': {'field': 'b', 'type': 'quantitative'}
      }
    }
  },
  position: rectangularPosition
}

export const barChartProperties = {
  type: 'Bar chart',
  category: 'Charts',
  icon: {
    icon: 'chart-bar'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    width: 150,
    height: 100,
    cornerRadius: 10,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: '#000000',
    spec: {
      '$schema': 'https://vega.github.io/schema/vega-lite/v5.json',
      'description': 'A simple bar chart with embedded data.',
      'data': {
        'values': [
          {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
          {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
          {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
        ]
      },
      'mark': 'bar',
      'encoding': {
        'x': {'field': 'a', 'type': 'nominal', 'axis': {'labelAngle': 0}},
        'y': {'field': 'b', 'type': 'quantitative'}
      }
    }
  },
  position: rectangularPosition
}
