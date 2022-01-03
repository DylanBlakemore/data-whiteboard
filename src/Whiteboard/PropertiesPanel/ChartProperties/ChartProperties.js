import React, { useState } from 'react'

import Data from './Data'
import Fields from './Fields'
import DataManager from 'DataManager'

export default function ChartProperties({ value, onChange, name }) {
  const [fixtureId, setFixtureId] = useState(null)
  const [availableFields, setAvailableFields] = useState([])

  const handleFixtureSelect = (fixtureId) => {
    setFixtureId(fixtureId)
    setAvailableFields(DataManager.fixtures.getFields(fixtureId))
  }

  return <>
    <Data onChange={ handleFixtureSelect } />
    {availableFields && <Fields mark={ value.mark } availableFields={ availableFields } />}
  </>
}
