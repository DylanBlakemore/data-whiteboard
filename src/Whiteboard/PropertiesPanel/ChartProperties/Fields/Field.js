import React from 'react'
import lodash from 'lodash'

import Dropdown from 'Components/Dropdown'

export default function Field({ field, options }) {
  const dropdownOptions = lodash.map(options, ({ value }) => ({
    value: value,
    label: value
  }))

  return <Dropdown
      options={ dropdownOptions }
      id={ `chart-field-${field}-selector` }
      handleChange={ () => {} }
      label={ field }
    />
}
