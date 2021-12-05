import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontSmoothing }) {
  return _.map(fontSmoothing, (classValue, className) => {
    return defineClass(`${className}`, {
      'font-smoothing': classValue
    })
  })
}
