import './Whiteboard.scss'

import Palette from 'Whiteboard/Palette'
import Canvas from 'Whiteboard/Canvas'
import PropertiesPanel from 'Whiteboard/PropertiesPanel'

export default function Whiteboard() {
  return (
    <div className='whiteboard'>
      <Palette />
      <Canvas />
      <PropertiesPanel />
    </div>
  )
}
