import postcss from 'postcss'
import atom from '../src/atom'
import purgeUnusedUtilities from '../src/lib/pureUnusedUtilities'
import fs from 'fs'
import path from 'path'
import stylefmt from 'stylefmt'
import defaultConfig from '../config/defaultConfig'

console.log('Start Building!')

postcss([
  atom(defaultConfig),
  purgeUnusedUtilities(defaultConfig),
  stylefmt
])
  .process('', {
    // from:添加文件路径，css规则正常缩进2空格；路径为空，css规则缩进了4空格
    from: '../css/atom.css',
    to: '../css/atom.css',
    map: { inline: false }
  })
  .then(res => {
    fs.writeFileSync(path.resolve(__dirname, '../css/atom.css'), res.css)
    if (res.map) {
      fs.writeFileSync(path.resolve(__dirname, '../css/atom.css.map'), res.map.toString())
    }
  }).catch(res => console.log(res))

console.log('Finished Building!')
