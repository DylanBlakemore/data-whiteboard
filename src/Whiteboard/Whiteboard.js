import './Whiteboard.scss'

import Palette from 'Whiteboard/Palette'
import Canvas from 'Whiteboard/Canvas'
import PropertiesPanel from 'Whiteboard/PropertiesPanel'
import { useKeypress } from 'Hooks'
import { deleteSelected } from 'Whiteboard/widgetState'

export default function Whiteboard() {
  useKeypress('Backspace', deleteSelected)

  return <div className='whiteboard'>
    <Palette />
    <Canvas />
    <PropertiesPanel />
  </div>
}
