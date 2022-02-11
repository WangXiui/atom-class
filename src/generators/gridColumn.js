import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ gridColumn }) {
  return _.map(gridColumn, (classValue, className) => {
    return defineClass(`col-${className}`, {
      'grid-column': classValue
    })
  })
}
