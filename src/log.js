import emitonoff from 'emitonoff'

const log = emitonoff({contents: []})

log.on('add', (type, args) => {
  log.contents.push(`${type}: ${JSON.stringify(args)}`)
  if (log.contents.length > 4) {
    log.contents = log.contents.slice(-4)
  }
})

console.log = (...args) => log.emit('add', 'LOG', args)
console.warn = (...args) => log.emit('add', 'WARN', args)
console.error = (...args) => log.emit('add', 'ERROR', args)
console.info = (...args) => log.emit('add', 'INFO', args)
console.debug = (...args) => log.emit('add', 'DEBUG', args)

export default log
