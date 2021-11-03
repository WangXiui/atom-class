import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ colorType }) {
  return _.map(colorType, (classValue, className) => {
    return defineClass(`c-${className}`, {
      color: classValue
    })
  })
}
