import React, { useState, useEffect } from 'react'
import * as c from './style'
import Context from '@/presentation/contexts/form/formContext'
import { FormStatus, Input } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [stateLogin, setStateLogin] = useState({
    loading: false,
    email: '',
    password: ''
  })

  const [errorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    errorMessage: ''
  })

  useEffect(() => {
    validation.validate('email', stateLogin.email)
  }, [stateLogin.email])

  useEffect(() => {
    validation.validate('password', stateLogin.password)
  }, [stateLogin.password])

  return (
    <c.Container>
      <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/AF87AD0A-A82B-4DF6-832B-5E31309C7C05.png" alt="" title="" />
      <c.Content>
        <Context.Provider value={{ stateLogin, errorState, setStateLogin }}>
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
