import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ overscrollBehavior }) {
  return _.map(overscrollBehavior, (classValue, className) => {
    return defineClass(`overscroll-${className}`, {
      'overscroll-behavior': classValue
    })
  })
}
