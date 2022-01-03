import React from 'react'
import lodash from 'lodash'

import Field from './Field'

const fieldMap = {
  bar: ['x', 'y', 'row', 'column', 'color'],
  arc: ['radius', 'theta', 'row', 'column', 'color'],
  line: ['x', 'y', 'row', 'column', 'color']
}

export default function Fields({ mark, availableFields }) {
  return <>
    {lodash.map(fieldMap[mark] || [], (field) => {
      return <Field field={ field } options={ availableFields } />
    })}
  </>
}
