import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ objectPosition }) {
  return _.map(objectPosition, (classValue, className) => {
    return defineClass(`object-${className}`, {
      'object-position': classValue
    })
  })
}
