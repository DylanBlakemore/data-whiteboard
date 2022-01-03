import React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import lodash from 'lodash'

export default function Dropdown({ label, id, options, handleChange, value }) {

  const handleSelectedValue = (event) => {
    handleChange(event.target.value)
  }

  return <FormControl fullWidth>
    <InputLabel id={`${id}-label-id`}>{ label }</InputLabel>
    <Select
      labelId={`${id}-label-id`}
      id={ id }
      label={ label }
      value={ value || '' }
      onChange={ handleSelectedValue }
    >
      <MenuItem value=''>
        <em>{ 'None' }</em>
      </MenuItem>
      {lodash.map(options, (option) => {
        return <MenuItem
            value={ option.value }
            key={ `${id}-${option.value}` }
          >
            { option.label }
          </MenuItem>
      })}
    </Select>
  </FormControl>
}
