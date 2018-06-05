import blessed from 'blessed'
import pkg from '../package.json'

// Create our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: pkg.name
})

// not working
// screen.key(['escape', 'q', 'C-c'], () => process.exit(0))

// Don't overwrite the screen
console.log = function () { }
console.warn = function () { }
console.error = function () { }
console.info = function () { }
console.debug = function () { }

export default screen
