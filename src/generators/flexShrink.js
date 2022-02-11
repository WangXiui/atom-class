import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ flexShrink }) {
  return _.map(flexShrink, (classValue, className) => {
    return defineClass(`flex-${className}`, {
      'flex-shrink': classValue
    })
  })
}
