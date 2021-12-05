import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontVariantNumeric }) {
  return _.map(fontVariantNumeric, (classValue, className) => {
    return defineClass(`${className}`, {
      'font-variant-numeric': classValue
    })
  })
}
