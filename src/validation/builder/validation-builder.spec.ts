import { RequiredFieldValidation, EmailValidation, MinLengthValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'

describe('', () => {
  test('Should return RequiredValidation', () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Should return EmailValidation', () => {
    const validations = sut.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })

  test('Should return a list of validations', () => {
    const validations = sut.field('any_field').required().min(5).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation('any_field'),
      new MinLengthValidation('any_field', 5),
      new EmailValidation('any_field')
    ])
  })
})
