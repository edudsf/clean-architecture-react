import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field')
  ]
  const sut = new ValidationComposite(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('Should return error if away validation fails ', () => {
    const { sut, fieldValidationSpy } = makeSut()
    fieldValidationSpy[0].error = new Error('any_error_message')
    fieldValidationSpy[1].error = new Error('any_error_message')
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('any_error_message')
  })
})
