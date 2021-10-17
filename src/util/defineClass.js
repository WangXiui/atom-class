import postcss from 'postcss'
import _ from 'lodash'

export default function (className, properties) {
  const kebabClass = _.kebabCase(className)
  const decls = _(properties).toPairs().map(([prop, value]) => {
    return postcss.decl({
      prop: _.kebabCase(prop),
      value
    })
  }).value()
  return postcss.rule({
    selector: `.${kebabClass}`
  }).append(decls)
}
