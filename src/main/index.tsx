import React from 'react'
import ReactDOM from 'react-dom'
import { Login } from '@/presentaion/pages'
import GlobalStyle from '@/presentaion/styles/styles'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Login />
  </>,
  document.getElementById('main')
)
