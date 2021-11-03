import postcss from 'postcss'
import _ from 'lodash'

/**
 * 转译斜杠
 * 例：（1/10）
 * @param selector
 * @returns {*}
 */
function escapeSelector (selector) {
  return selector.replace(/([^A-Za-z0-9\\-])/g, '\\$1')
}
export default function (className, properties) {
  const kebabClass = escapeSelector(className)
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
