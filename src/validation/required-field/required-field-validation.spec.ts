import { RequiredFieldValidation } from './required-field-validation'
import faker from 'faker'
import { RequiredFieldError } from '../errors/required-field-error'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation('email')

describe('', () => {
  test('Should return error if field is empty ', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty ', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
