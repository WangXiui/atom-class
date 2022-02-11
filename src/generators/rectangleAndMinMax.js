import defineClass from '../util/defineClass'
import _ from 'lodash'

export default function ({ geometricTypes, geometricNumsTypes }) {
  return _.flatMap(geometricTypes, (type, typeKey) => {
    return _.flatMap(geometricNumsTypes, (num, numKey) => {
      if (['max-w', 'max-h'].includes(typeKey)) {
        if (numKey !== 'auto') {
          return defineClass(`${typeKey}-${numKey}`, {
            [type]: `${num}`
          })
        }
      }
      return defineClass(`${typeKey}-${numKey}`, {
        [type]: `${num}`
      })
    })
  })
}
