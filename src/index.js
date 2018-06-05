import React from 'react'

import { render } from 'react-blessed'
import App from './components/App'
import screen from './screen'
import './signal'

// Render React component into screen
render(<App />, screen)

// This is dumb but I don't understand how else to prevent process from exiting.
// If it exits, it will get restarted by nodemon, but then hot reloading won't work.
setInterval(() => {}, 1000)
