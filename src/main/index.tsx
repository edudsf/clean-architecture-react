import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'
import GlobalStyle from '@/presentation/styles/styles'
import { makeLogin } from './factories/pages/login/login-factory'

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router
      makeLogin={makeLogin}
    />
  </>,
  document.getElementById('main')
)
