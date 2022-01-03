import { circularPosition } from 'Whiteboard/utils'

export { default } from './Circle'

export const circleProperties = {
  type: 'Circle',
  category: 'Shapes',
  icon: {
    icon: 'circle'
  },
  defaults: {
    stroke: '#ffffff',
    fill: '#ffffff',
    radius: 50,
    shadowBlur:  5,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity:  0.5,
    shadowColor: '#000000'
  },
  position: circularPosition
}
