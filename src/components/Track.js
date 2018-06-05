import React, { Component } from 'react'

import { Track as theme } from '../theme'
import { toHex } from '../utils'

class Track extends Component {
  render () {
    const {title, track, t} = this.props
    return (
      <box label={title}
        ref={`track${t}`}
        left={t * 20}
        width={20}
        height='100%-1'
        top={0}
        border={{type: 'line'}}
        style={theme}>
        {track.map((line, l) => `${toHex(l)} --- -- -- ----`).join('\n')}
      </box>
    )
  }
}

export default Track
