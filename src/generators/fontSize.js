import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ fontsize }) {
  return _.map(fontsize, (classValue, className) => {
    return defineClass(`f${className}`, {
      'font-size': classValue
    })
  })
}
