import React, { Component } from 'react'

import { Track as theme } from '../theme'
import { toHex } from '../utils'

class Track extends Component {
  render () {
    const {title, track, t, focused} = this.props
    return (
      <box label={title}
        focused={focused}
        onClick={e => console.log('click')}
        left={t * 20}
        width={20}
        height='100%-6'
        top={0}
        border={{type: 'line'}}
        style={theme}>
        {track.map((line, l) => `${toHex(l)} --- -- -- ----`).join('\n')}
      </box>
    )
  }
}

export default Track
