import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ boxSizing }) {
  return _.map(boxSizing, (classValue, className) => {
    return defineClass(`box-${className}`, {
      'box-sizing': classValue
    })
  })
}
