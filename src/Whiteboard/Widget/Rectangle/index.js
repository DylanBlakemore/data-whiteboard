import { rectangularPosition } from 'Whiteboard/utils'

export { default } from './Rectangle'

export const rectangleProperties = {
  type: 'Rectangle',
  category: 'Shapes',
  icon: {
    icon: 'square'
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
    textColor: '#000000',
    text: 'Rectangle',
    fontSize: 18
  },
  position: rectangularPosition
}
