import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ listStylePosition }) {
  return _.map(listStylePosition, (classValue, className) => {
    return defineClass(`list-${className}`, {
      'list-style-position': classValue
    })
  })
}
