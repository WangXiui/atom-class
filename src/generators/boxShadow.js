import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ boxShadow }) {
  return _.map(boxShadow, (classValue, className) => {
    return defineClass(`shadow-${className}`, {
      'box-shadow': classValue
    })
  })
}
