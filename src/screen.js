import blessed from 'blessed'
import pkg from '../package.json'

// Create our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: pkg.name
})

screen.key(['escape'], function (ch, key) {
  console.log(key)
  return process.exit(0)
})

export default screen
