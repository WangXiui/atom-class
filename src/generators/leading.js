import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ leading }) {
  return _.map(leading, (classValue, className) => {
    return defineClass(`leading-${className}`, {
      'line-height': classValue
    })
  })
}
