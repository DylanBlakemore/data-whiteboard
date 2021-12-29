import './PropertiesPanel.scss'

import React, { useCallback } from 'react'
import lodash from 'lodash'

import { useWidgets, updateAttribute } from 'Whiteboard/widgetState'
import { propertyTypes } from './propertyTypes'

export default function PropertiesPanel() {
  const selectedWidget = useWidgets((state) => state.widgets[state.selected])

  const updateAttr = useCallback((event) => {
    const attr = event.target.name;
    updateAttribute(attr, event.target.value);
  }, [])

  const filteredPropertyTypes = selectedWidget && lodash.filter(propertyTypes, (property) => {
    return property.property in selectedWidget
  })

  return <div>
    <aside className='panel'>
      <h2>Properties</h2>
      <div className='properties'>
        {
          selectedWidget && <>
            <div className='key'>
              Type <span className='value'>{selectedWidget.type}</span>
            </div>

            {
              lodash.map(filteredPropertyTypes, ({ label, property, picker }) => {
                return <div className='key' key={ `property-${property}` }>
                  { `${label}  ` }
                  <input
                    className='value'
                    name={ property }
                    type={ picker }
                    value={ selectedWidget[property] || '' }
                    onChange={updateAttr}
                  />
                </div>
              })
            }
          </>
        }
      </div>
    </aside>
  </div>
}
