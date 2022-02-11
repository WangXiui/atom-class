import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ colors }) {
  return _.map(colors, (classValue, className) => {
    return defineClass(`c-${className}`, {
      color: classValue
    })
  })
}
