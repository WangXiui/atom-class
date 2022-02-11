import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ resize }) {
  return _.map(resize, (classValue, className) => {
    return defineClass(`resize-${className}`, {
      resize: classValue
    })
  })
}
