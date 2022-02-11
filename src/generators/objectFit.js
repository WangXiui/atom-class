import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ objectFit }) {
  return _.map(objectFit, (classValue, className) => {
    return defineClass(`object-${className}`, {
      'object-fit': classValue
    })
  })
}
