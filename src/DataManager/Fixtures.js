import lodash from 'lodash'

const fixturesData = [
  {
    id: 1,
    data: [
      {'a': 'A', 'b': 28}, {'a': 'B', 'b': 55}, {'a': 'C', 'b': 43},
      {'a': 'D', 'b': 91}, {'a': 'E', 'b': 81}, {'a': 'F', 'b': 53},
      {'a': 'G', 'b': 19}, {'a': 'H', 'b': 87}, {'a': 'I', 'b': 52}
    ],
    fields: [
      { id: 543, value: 'a', type: 'nominal' },
      { id: 544, value: 'b', type: 'quantitative' }
    ]
  }
]

export class Fixtures {

  static filterAttributes(fixture, attributes) {
    if (attributes) {
      return null
    } else {
      return fixture
    }
  }

  static all(attributes = null) {
    return lodash.map(fixturesData, (fixture) => {
      return Fixtures.filterAttributes(fixture, attributes)
    })
  }

  static get({ id, attributes = null }) {
    return Fixtures.filterAttributes(
      lodash.find(fixturesData, (fixture) => fixture.id === id),
      attributes
    )
  }

}
