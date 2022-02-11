import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ clear }) {
  return _.map(clear, (classValue, className) => {
    return defineClass(`clear-${className}`, {
      clear: classValue
    })
  })
}
