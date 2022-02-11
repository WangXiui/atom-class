import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ gridRow }) {
  return _.map(gridRow, (classValue, className) => {
    return defineClass(`row-${className}`, {
      'grid-row': classValue
    })
  })
}
