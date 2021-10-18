#!/user/bin/env node

import postcss from 'postcss'
import atom from '../src/atom'
import defaultConfig from '../config/defaultConfig'
import fs from 'fs'
import path from 'path'
import { program } from 'commander'

// The current file does two things.
// 1.You can customize the defaultconfig configuration file.
// 2.Process user specified entry style files and output it to the specified folder.

function splitFilename (filename) {
  return filename.split('.')
}

program
  .version('0.0.1')
  .usage('[options] <file ...>')
  .option('-c, --config [value]', 'Pass custom configuration')
  .parse(process.argv)

// 2.input/output filepath
const inputFile = program.args[0]
if (!inputFile) {
  console.log('inputFile doesnot exit')
  process.exit(1)
}
const outputFile = program.args[1] || `${splitFilename(program.args[0])[0]}-output.css`

// 1.config file
fs.readFile(path.join(program.config), (err, config) => {
  if (err) {
    console.log(`config file ${program.config} does not exit`)
    process.exit(1)
  }
  const customConfig = JSON.parse(config.toString())
  const finalConfig = {
    ...defaultConfig,
    ...customConfig
  }

  // finally execute
  fs.readFile(inputFile, (err, css) => {
    if (err) process.exit(1)

    postcss([atom(finalConfig)])
      .process(css)
      .then(res => {
        fs.writeFileSync(outputFile, res.css)
      })
      .catch(err => console.log(err))
  })
})
