import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ backgroundClip }) {
  return _.map(backgroundClip, (classValue, className) => {
    return defineClass(`bg-clip-${className}`, {
      'background-clip': classValue
    })
  })
}
