import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ verticalAlign }) {
  return _.map(verticalAlign, (classValue, className) => {
    return defineClass(`align-${className}`, {
      'vertical-align': classValue
    })
  })
}
