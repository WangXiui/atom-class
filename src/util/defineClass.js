import postcss from 'postcss'
import _ from 'lodash'
import escapeClassName from './escapeClassName'

export default function (className, properties) {
  const kebabClass = escapeClassName(className)
  const decls = _.map(properties, (value, prop) => {
    return postcss.decl({
      prop: _.kebabCase(prop),
      value: `${value}`
    })
  })

  return postcss.rule({
    selector: `.${kebabClass}`
  }).append(decls)
}
