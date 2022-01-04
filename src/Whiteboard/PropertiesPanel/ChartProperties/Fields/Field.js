import React, { useState } from 'react'
import lodash from 'lodash'

import Dropdown from 'Components/Dropdown'

export default function Field({ field, options, onChange, value }) {
  const [selectedValue, setSelectedValue] = useState(value?.field)

  const dropdownOptions = lodash.map(options, ({ value }) => ({
    value: value,
    label: value
  }))

  const handleSelect = (fieldName) => {
    const fieldObj = lodash.find(options, (option) => option.value === fieldName)
    setSelectedValue(fieldName)
    onChange(field)(fieldObj ? { field: fieldName, type: fieldObj.type } : null)
  }

  return <Dropdown
      options={ dropdownOptions }
      id={ `chart-field-${field}-selector` }
      handleChange={ handleSelect }
      label={ field }
      value={ selectedValue }
    />
}
