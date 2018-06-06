import React, { Component } from 'react'

import Pattern from './Pattern'
import Toolbar from './Toolbar'
import Log from './Log'

import { pattern } from '../pattern'

class App extends Component {
  render () {
    return (
      <element>
        <Pattern pattern={pattern} currentTrack={0} />
        <Toolbar />
        <Log />
      </element>
    )
  }
}

export default App
