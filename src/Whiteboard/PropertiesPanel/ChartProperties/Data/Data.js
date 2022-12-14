import React from 'react'
import lodash from 'lodash'

import DataManager from 'DataManager'
import Dropdown from 'Components/Dropdown'

export default function Data({ value, onChange }) {
  const data = lodash.map(DataManager.fixtures.getFixtureList(), ({ id, label }) => ({
    value: id,
    label: label
  }))

  const handleChange = (selectedValue) => {
    onChange(selectedValue)
  }

  return <Dropdown
    label={ 'Data' }
    id={ 'chart-data-selector' }
    handleChange={ handleChange }
    options={ data }
    value={ value }
  />
}
