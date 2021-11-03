import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ decimalTypes }) {
  return _.map(decimalTypes, (classValue, className) => {
    return defineClass(`opacity-${className}`, {
      opacity: classValue
    })
  })
}
