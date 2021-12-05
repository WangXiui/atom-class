import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ float }) {
  return _.map(float, (classValue, className) => {
    return defineClass(`float-${className}`, {
      float: classValue
    })
  })
}
