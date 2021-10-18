import postcss from 'postcss'
import _ from 'lodash'

export default function (className, properties) {
  const kebabClass = _.kebabCase(className)
  console.log(11, properties);
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
