import React from 'react'

const Error = ({error}) => (
  <box label='!!! ERROR !!!'
    border={{type: 'line'}}
    style={{border: {fg: 'red'}}}>
    {error.toString()}
  </box>
)

export default Error
