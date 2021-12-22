import './PropertiesPanel.scss'

import React from 'react'

export default function PropertiesPanel() {
  return (
    <aside className='panel'>
      <h2>Properties</h2>
      <div className='properties'>
        <div className='no-data'>Nothing is selected</div>
      </div>
    </aside>
  )
}
