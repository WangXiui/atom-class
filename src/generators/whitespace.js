import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ whitespace }) {
  return _.map(whitespace, (classValue, className) => {
    return defineClass(`whitespace-${className}`, {
      'white-space': classValue
    })
  })
}
