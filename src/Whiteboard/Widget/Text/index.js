import { rectangularPosition } from 'Whiteboard/utils'

export { default } from './Text'

export const textProperties = {
  type: 'Text',
  category: 'Miscellaneous',
  icon: {
    icon: 'font',
    style: 'fas'
  },
  defaults: {
    width: 150,
    height: 100,
    text: "...",
    fontSize: 18,
    padding: 20,
    textColor: '#000000',
  },
  position: rectangularPosition
}
