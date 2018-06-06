import React, { Component } from 'react'

import * as theme from '../theme'

class Toolbar extends Component {
  render () {
    return (
      <box
        width='100%'
        height={1}
        top='100%-6'
        style={theme.Toolbar}
        align='center'
        tags
      >
        {`{yellow-fg}START{/yellow-fg}: play/pause | {yellow-fg}A{/yellow-fg}: change | {yellow-fg}B{/yellow-fg}: track | {yellow-fg}SELECT{/yellow-fg}: instrument`}
      </box>
    )
  }
}

export default Toolbar
