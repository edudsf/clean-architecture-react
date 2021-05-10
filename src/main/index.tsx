import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentaion/components'
import GlobalStyle from '@/presentaion/styles/styles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById('main')
)
