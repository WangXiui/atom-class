import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ userSelect }) {
  return _.map(userSelect, (classValue, className) => {
    return defineClass(`select-${className}`, {
      'user-select': classValue
    })
  })
}
