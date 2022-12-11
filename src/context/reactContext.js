import React from 'react'

const ReactContext = React.createContext({
  name: '',
  topics: '',
  isRegistered: false,
  onChangeNameprop: () => {},
  onChangeTopicsprop: () => {},
  onClickChangeView: () => {},
})

export default ReactContext
