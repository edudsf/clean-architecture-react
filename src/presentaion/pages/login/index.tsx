import React, { useState } from 'react'
import * as c from './style'
import Context from '@/presentaion/contexts/form/formContext'
import { FormStatus } from '@/presentaion/components'

type StateProps = {
  loading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [stateLogin] = useState<StateProps>({
    loading: false,
    errorMessage: ''
  })

  return (
    <c.Container>
      <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/AF87AD0A-A82B-4DF6-832B-5E31309C7C05.png" alt="" title="" />
      <c.Content>
        <Context.Provider value={stateLogin}>
          <form>
            <h2>Entrar</h2>
            <input type="email" name="email" placeholder="Digite seu e-mail" />
            <input type="password" name="password" placeholder="Digite sua senha" />
            <button type="submit">Entrar</button>
            <button>Não possui cadastro? Clique aqui.</button>
            <FormStatus />
          </form>
        </Context.Provider>
      </c.Content>
    </c.Container>
  )
}

export default Login
