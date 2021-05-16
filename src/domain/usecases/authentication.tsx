import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

/* Retorna os dados da conta do usuários.
Alguém irá implementar a classe. Necessário o método, parâmetro e retorno */
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
