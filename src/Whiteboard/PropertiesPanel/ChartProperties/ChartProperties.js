import React, { useState, useCallback } from 'react'
import lodash from 'lodash'

import Data from './Data'
import Fields from './Fields'
import DataManager from 'DataManager'
import { updateAttribute } from 'Whiteboard/widgetState'

function generateSpec(mark, fields, data) {
  return {
    '$schema': 'https://vega.github.io/schema/vega-lite/v5.json',
    'mark': mark,
    'encoding': fields,
    'data': { 'values': data }
  }
}

function getAvailableFields(fixtureId) {
  if (!fixtureId) return []
  return DataManager.fixtures.getFields(fixtureId)
}

export default function ChartProperties({ selectedWidget }) {
  const [fixture, setFixture] = useState(selectedWidget.fixture)
  const [availableFields, setAvailableFields] = useState(getAvailableFields(selectedWidget.fixture.id))
  const [selectedFields, setSelectedFields] = useState(selectedWidget.spec.encoding || {})
  const mark = selectedWidget.spec.mark

  const updateWidgetSpec = useCallback((generatedSpec) => {
    updateAttribute('spec', generatedSpec);
  }, [])

  const handleFixtureSelect = (fixtureId) => {
    DataManager.fixtures.getData(fixtureId, (data) => {
      const updatedFixture = {
        id: fixtureId,
        data: data
      }
      setFixture(updatedFixture)
      updateAttribute('fixture', updatedFixture)
    })

    setAvailableFields(getAvailableFields(fixtureId))
    setSelectedFields({})
  }

  const handleFieldSelect = (field) => (value) => {
    const updatedFields = {
      ...selectedFields,
      [field]: value
    }
    setSelectedFields(updatedFields)
    updateWidgetSpec(generateSpec(mark, updatedFields, fixture.data))
  }

  return <>
    <Data onChange={ handleFixtureSelect } value={fixture.id} />
    {availableFields && <Fields mark={ mark } availableFields={ availableFields } value={ selectedFields } onChange={ handleFieldSelect } />}
  </>
}
