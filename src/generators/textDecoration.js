import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ textDecoration }) {
  return _.map(textDecoration, (classValue, className) => {
    return defineClass(`${className}`, {
      'text-decoration': classValue
    })
  })
}
