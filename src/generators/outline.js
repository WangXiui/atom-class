import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ outline }) {
  return _.map(outline, (classValue, className) => {
    return defineClass(`outline-${className}`, {
      outline: `2px solid ${classValue}`,
      'outline-offset': '2px'
    })
  })
}
