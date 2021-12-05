import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ gridTemplateColumns }) {
  return _.map(gridTemplateColumns, (classValue, className) => {
    return defineClass(`grid-cols-${className}`, {
      'grid-template-columns': classValue
    })
  })
}
