import lodash from 'lodash'

export const propertyTypes = [
  {
    category: 'Shape',
    label: 'Fill',
    property: 'fill',
    picker: 'color'
  },
  {
    category: 'Shape',
    label: 'Stroke',
    property: 'stroke',
    picker: 'color'
  },
  {
    category: 'Shape',
    label: 'Shadow color',
    property: 'shadowColor',
    picker: 'color'
  }
]

export const groupedProperties = lodash.keyBy(propertyTypes, 'category')
