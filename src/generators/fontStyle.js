import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontStyle }) {
  return _.map(fontStyle, (classValue, className) => {
    return defineClass(`${className}`, {
      'font-style': classValue
    })
  })
}
