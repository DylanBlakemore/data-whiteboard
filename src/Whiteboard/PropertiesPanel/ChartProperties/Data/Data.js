import React, { useState } from 'react'
import lodash from 'lodash'

import DataManager from 'DataManager'
import Dropdown from 'Components/Dropdown'

export default function Data({ onChange }) {
  const data = lodash.map(DataManager.fixtures.getFixtureList(), ({ id, label }) => ({
    value: id,
    label: label
  }))

  const [value, setValue] = useState(null)

  const handleChange = (selectedValue) => {
    onChange(selectedValue)
    setValue(selectedValue)
  }

  return <Dropdown
    label={ 'Data' }
    id={ 'chart-data-selector' }
    handleChange={ handleChange }
    options={ data }
    value={ value }
  />
}
