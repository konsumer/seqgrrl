// This is copied from webpack/hot/signal.js
// but I removed the console.logs I don't care about
// so that they don't overlap my application.

function checkForUpdate (fromUpdate) {
  module.hot.check(function (err, updatedModules) {
    if (err) {
      if (module.hot.status() in {
        abort: 1,
        fail: 1
      }) {
        console.warn('[HMR] Cannot apply update.')
        console.warn('[HMR] ' + err.stack || err.message)
        console.warn('[HMR] You need to restart the application!')
      } else {
        console.warn('[HMR] Update failed: ' + err.stack || err.message)
      }
      return
    }
    if (!updatedModules) {
      return
    }

    module.hot.apply({
      ignoreUnaccepted: true
    }, function (err, renewedModules) {
      if (err) {
        if (module.hot.status() in {
          abort: 1,
          fail: 1
        }) {
          console.warn('[HMR] Cannot apply update (Need to do a full reload!)')
          console.warn('[HMR] ' + err.stack || err.message)
          console.warn('[HMR] You need to restart the application!')
        } else {
          console.warn('[HMR] Update failed: ' + err.stack || err.message)
        }
        return
      }

      checkForUpdate(true)
    })
  })
}

if (module.hot) {
  process.on('SIGUSR2', () => {
    if (module.hot.status() !== 'idle') {
      console.warn('[HMR] Got signal but currently in ' + module.hot.status() + ' state.')
      console.warn('[HMR] Need to be in idle state to start hot update.')
      return
    }
    checkForUpdate()
  })
} else {
  throw new Error('[HMR] Hot Module Replacement is disabled.')
}
