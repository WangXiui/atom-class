import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ overflowWrap }) {
  return _.map(overflowWrap, (classValue, className) => {
    return defineClass(`${className}`, {
      'overflow-wrap': classValue
    })
  })
}
