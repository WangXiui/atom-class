import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ alignItems }) {
  return _.map(alignItems, (classValue, className) => {
    return defineClass(`items-${className}`, {
      'align-items': classValue
    })
  })
}
