import postcss from 'postcss'
import atom from '../src/atom'
import fs from 'fs'
import path from 'path'
import defaultConfig from '../config/defaultConfig'

postcss([atom(defaultConfig)])
  .process('', {
    from: '',
    to: '../css/atom.css',
    map: { inline: false }
  })
  .then(res => {
    fs.writeFileSync(path.resolve(__dirname, '../css/atom.css'), res.css)
    if (res.map) {
      fs.writeFileSync(path.resolve(__dirname, '../css/atom.css.map'), res.map.toString())
    }
  }).catch(res => console.log(res))
