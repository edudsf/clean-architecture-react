import React, { useState, useEffect } from 'react'
import * as c from './style'
import Context from '@/presentation/contexts/form/formContext'
import { FormStatus, Input } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases/authentication'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [stateLogin, setStateLogin] = useState({
    loading: false,
    email: '',
    password: ''
  })

  const [errorState, setErrorState] = useState({
    email: 'Campo obrigatório',
    password: 'Campo obrigatório',
    errorMessage: ''
  })

  useEffect(() => {
    setErrorState({
      ...errorState,
      email: validation.validate('email', stateLogin.email),
      password: validation.validate('password', stateLogin.password)
    })
  }, [stateLogin.email, stateLogin.password])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (stateLogin.loading || errorState.email || errorState.password) {
        return
      }
      setStateLogin({ ...stateLogin, loading: true })
      const account = await authentication.auth({
        email: stateLogin.email,
        password: stateLogin.password
      })
      localStorage.setItem('accessToken', account.accessToken)
    } catch (error) {
      setStateLogin({
        ...stateLogin,
        loading: false
      })
      setErrorState({
        ...errorState,
        errorMessage: error.message
      })
    }
  }

  return (
    <c.Container>
      <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/AF87AD0A-A82B-4DF6-832B-5E31309C7C05.png" alt="" title="" />
      <c.Content>
        <Context.Provider value={{ stateLogin, errorState, setStateLogin }}>
          <form data-testid="form" onSubmit={handleSubmit}>
            <h2>Entrar</h2>
            <Input type="email" name="email" placeholder="Digite seu e-mail" />
            <Input type="password" name="password" placeholder="Digite sua senha" />
            <button data-testid="submit" type="submit" disabled={!!errorState.email || !!errorState.password}>Entrar</button>
            <button>Não possui cadastro? Clique aqui.</button>
            <FormStatus />
          </form>
        </Context.Provider>
      </c.Content>
    </c.Container>
  )
}

export default Login
