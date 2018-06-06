import React, { Component } from 'react'
import EmitOnOff from './EmitOnOff'

import log from '../log'

class Log extends Component {
  render () {
    return (
      <EmitOnOff state={log} trigger='add'>
        <box top='100%-5' tags>
          {log.contents.join('\n')}
        </box>
      </EmitOnOff>
    )
  }
}

export default Log
