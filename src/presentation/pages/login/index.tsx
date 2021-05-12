import React, { useState } from 'react'
import * as c from './style'
import Context from '@/presentation/contexts/form/formContext'
import { FormStatus, Input } from '@/presentation/components'

const Login: React.FC = () => {
  const [stateLogin] = useState({
    loading: false
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    errorMessage: ''
  })

  return (
    <c.Container>
      <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/AF87AD0A-A82B-4DF6-832B-5E31309C7C05.png" alt="" title="" />
      <c.Content>
        <Context.Provider value={{ stateLogin, errorState }}>
          <form>
            <h2>Entrar</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
            <button data-testid="submit" type="submit" disabled>Entrar</button>
            <button>Não possui cadastro? Clique aqui.</button>
            <FormStatus />
          </form>
        </Context.Provider>
      </c.Content>
    </c.Container>
  )
}

export default Login
