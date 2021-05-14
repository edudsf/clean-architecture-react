import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'

class RequiredFieldError extends Error {
  constructor () {
    super('Campo obrigatório')
    this.name = 'RequiredFieldError'
  }
}

describe('', () => {
  test('Should return error if field is empty ', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty ', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
