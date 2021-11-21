import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontFamily }) {
  return _.map(fontFamily, (classValue, className) => {
    return defineClass(`${className}`, {
      'font-variant-numeric': classValue
    })
  })
}
