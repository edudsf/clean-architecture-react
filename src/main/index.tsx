import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import GlobalStyle from '@/presentation/styles/styles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById('main')
)
