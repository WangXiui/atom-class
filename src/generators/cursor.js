import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function ({ cursor }) {
  return _.map(cursor, (classValue, className) => {
    return defineClass(`cur-${className}`, {
      cursor: classValue
    })
  })
}
