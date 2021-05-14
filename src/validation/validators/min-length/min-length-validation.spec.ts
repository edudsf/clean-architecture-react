import { InvalidFieldError } from '@/validation/errors/invalid-field-error'
import { MinLengthValidation } from './min-lenght-validation'
import faker from 'faker'

const makeSut = (minLength: number): MinLengthValidation => new MinLengthValidation('field', minLength)

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError('field'))
  })

  test('should return falsy if value is valid', () => {
    const sut = makeSut(5)
    const error = sut.validate(faker.random.alphaNumeric(6))
    expect(error).toBeFalsy()
  })
})
