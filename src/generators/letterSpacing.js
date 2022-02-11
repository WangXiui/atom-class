import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ letterSpacing }) {
  return _.map(letterSpacing, (classValue, className) => {
    return defineClass(`${className}`, {
      'letter-spacing': classValue
    })
  })
}
