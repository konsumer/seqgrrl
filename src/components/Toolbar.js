import React, { Component } from 'react'

import { Toolbar as theme } from '../theme'

class Toolbar extends Component {
  render () {
    return (
      <box
        width='100%'
        height={1}
        top='100%-1'
        tags
        style={theme}
      >
        {`{center}{yellow-fg}START{/yellow-fg}: play/pause | {yellow-fg}A{/yellow-fg}: change | {yellow-fg}B{/yellow-fg}: track | {yellow-fg}SELECT{/yellow-fg}: instrument {/center}`}
      </box>
    )
  }
}

export default Toolbar
