import React, { Component } from 'react'

import Track from './Track'

class Pattern extends Component {
  render () {
    const { pattern, currentTrack } = this.props
    return (
      <box>
        {pattern.map((track, t) => <Track focused={currentTrack === t} title={`track ${t + 1}`} t={t} key={t} track={track} />)}
      </box>
    )
  }
}

export default Pattern
