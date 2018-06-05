import React, { Component } from 'react'

import Pattern from './Pattern'
import Toolbar from './Toolbar'

import { pattern } from '../pattern'

class App extends Component {
  render () {
    return (
      <element>
        <Pattern pattern={pattern} />
        <Toolbar />
      </element>
    )
  }
}

export default App
