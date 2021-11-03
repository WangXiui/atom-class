import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ borderCollapse }) {
  return _.map(borderCollapse, (classValue, className) => {
    return defineClass(`border-${className}`, {
      'border-collapse': classValue
    })
  })
}
