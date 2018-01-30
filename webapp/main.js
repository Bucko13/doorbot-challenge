// Entry point for your app
import domready from 'domready'
import React from 'react'
import { render } from 'react-dom'
import App from './App'

domready(function () {
  render(<App />, document.querySelector('main'))
})
