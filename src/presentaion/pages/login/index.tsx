import React from 'react'
import * as c from './style'
import Spinner from '@/presentaion/components/spinner/index'

const Login: React.FC = () => {
  return (
    <c.Container>
      <img src="https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/AF87AD0A-A82B-4DF6-832B-5E31309C7C05.png" alt="" title="" />
      <c.Content>
        <form>
          <h2>Entrar</h2>
          <input type="email" name="email" placeholder="Digite seu e-mail" />
          <input type="password" name="password" placeholder="Digite sua senha" />
          <button type="submit">Entrar</button>
          <button>Não possui cadastro? Clique aqui.</button>
          <Spinner />
        </form>
      </c.Content>
    </c.Container>
  )
}

export default Login
