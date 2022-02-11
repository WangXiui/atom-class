import defineClass from './defineClass'
import _ from 'lodash'

export default function (classes) {
  return _.map(classes, (properties, className) => {
    return defineClass(className, properties)
  })
}
