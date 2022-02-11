import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontSize }) {
  return _.map(fontSize, (classValue, className) => {
    return defineClass(`f${className}`, {
      'font-size': classValue
    })
  })
}
