import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ tableLayout }) {
  return _.map(tableLayout, (classValue, className) => {
    return defineClass(`table-${className}`, {
      'table-layout': classValue
    })
  })
}
