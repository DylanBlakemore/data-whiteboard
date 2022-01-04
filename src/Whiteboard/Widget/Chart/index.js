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
      'mark': 'line'
    },
    fixture: {}
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
      'mark': 'arc'
    },
    fixture: {}
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
      'mark': 'bar'
    },
    fixture: {}
  },
  position: rectangularPosition
}
