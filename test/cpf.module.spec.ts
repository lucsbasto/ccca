import { validate } from "../src/cpf.module";

describe('CPF', () => {
  it('Deve validar um cpf válido', () => {
    const isValid = validate('600.089.970-04');
    expect(isValid).toBeTruthy();
  })
  
  it('Deve validar um cpf válido que termine com 0', () => {
    const isValid = validate('473.087.668-70');
    expect(isValid).toBeTruthy();
  })
  
  it('Deve validar um cpf inválido com todos os digitos iguais', () => {
    const isValid = validate('111.111.111-11');
    expect(isValid).toBeFalsy();
  })
  
  it('Deve validar um cpf inválido com tamanho menor', () => {
    const isValid = validate('600.089.970');
    expect(isValid).toBeFalsy();
  })
  
  it('Deve validar um cpf inválido com tamanho maior', () => {
    const isValid = validate('600.089.970-0401');
    expect(isValid).toBeFalsy();
  })
  
  it('Deve validar um cpf vazio', () => {
    const isValid = validate('');
    expect(isValid).toBeFalsy()
  })

})
