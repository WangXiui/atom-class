import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ listStyleType }) {
  return _.map(listStyleType, (classValue, className) => {
    return defineClass(`list-${className}`, {
      'list-style-type': classValue
    })
  })
}
