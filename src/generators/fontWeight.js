import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ fontWeight }) {
  return _.map(fontWeight, (classValue, className) => {
    return defineClass(`font-${className}`, {
      'font-weight': classValue
    })
  })
}
