import lodash from 'lodash'
import data from 'vega-datasets'

const fixturesData = [
  {
    id: 1,
    label: 'Cars',
    dataKey: 'cars.json',
    fields: [
      { id: 543, value: 'Name', type: 'nominal' },
      { id: 544, value: 'Miles_per_Gallon', type: 'ordinal' },
      { id: 545, value: 'Cylinders', type: 'ordinal' },
      { id: 546, value: 'Displacement', type: 'quantitative' },
      { id: 547, value: 'Horsepower', type: 'quantitative' },
      { id: 548, value: 'Weight_in_lbs', type: 'quantitative' },
      { id: 549, value: 'Acceleration', type: 'quantitative' },
      { id: 550, value: 'Year', type: 'nominal' },
      { id: 551, value: 'Origin', type: 'nominal' }
    ]
  }
]

const indexedFixtures = lodash.keyBy(fixturesData, 'id')

export class Fixtures {

  static getFixtureList() {
    return lodash.map(fixturesData, ({ id, label }) => ({ id, label }))
  }

  static async getData(id, fn) {
    await data[indexedFixtures[id].dataKey].then((fixture) => fn(fixture))
  }

  static getFields(id) {
    return indexedFixtures[id]?.fields
  }

}
