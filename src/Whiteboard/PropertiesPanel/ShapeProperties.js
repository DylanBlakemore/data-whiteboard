import React, { useCallback } from 'react'
import lodash from 'lodash'

import Input from 'Components/Input'
import { updateAttribute } from 'Whiteboard/widgetState'

export default function ShapeProperties({ properties, selectedWidget }) {
  const updateAttr = useCallback((value) => {
    updateAttribute(value.name, value.value);
  }, [])

  return <>
    {
      lodash.map(properties, ({label, name, input}) => {
        return <Input
          name={ name }
          type={ input }
          value={ selectedWidget[name] || '' }
          onChange={ updateAttr }
          label={ label }
          key={ `${name}-shape-property` }
        />
      })
    }
  </>
}
