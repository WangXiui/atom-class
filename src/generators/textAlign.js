import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ textAlign }) {
  return _.map(textAlign, (classValue, className) => {
    return defineClass(`ta${className}`, {
      'text-align': classValue
    })
  })
}
