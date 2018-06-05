import React, { Component } from 'react'

import Track from './Track'

class Pattern extends Component {
  render () {
    const { pattern } = this.props
    return (
      <box>
        {pattern.map((track, t) => <Track title={`track ${t + 1}`} t={t} key={t} track={track} />)}
      </box>
    )
  }
}

export default Pattern
