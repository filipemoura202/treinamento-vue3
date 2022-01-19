import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators'

describe('Validators Utils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })

  it('should give an error with length less then 3 charactere payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })

  it('should return true when pass correctly input param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })

  it('should give an error when input type gone difference of email input type', () => {
    expect(validateEmptyAndEmail('filipe@gmail')).toBe('*Este campo precisa ser um e-mail')
  })

  it('should return true when input type value gone equal to email type', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true)
  })
})
