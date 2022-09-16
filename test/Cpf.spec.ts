import { Cpf } from "../src/Cpf";

describe('CPF', () => {
  const validCpfs = ['600.089.970-04','473.087.668-70']
  it.each(validCpfs)('Deve validar um cpf válido', (value) => {
    const cpf = new Cpf(value)
    expect(cpf).toBeDefined();
    expect(cpf.getValue()).toBe(value);
  })
  

  const CpfsWithAllDigitsTheSame = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
    '444.444.444-44',
  ]
  it.each(CpfsWithAllDigitsTheSame)('Deve validar um cpf inválido com todos os digitos iguais', (cpf) => {
    expect(() => new Cpf(cpf)).toThrow(new Error('Invalid CPF'));
  })
  
  it('Deve validar um cpf inválido com tamanho menor', () => {
    expect(() =>  new Cpf('600.089.970')).toThrow(new Error('Invalid CPF'));
  })
  
  it('Deve validar um cpf inválido com tamanho maior', () => {
    expect(() => new Cpf('600.089.970-0401')).toThrow(new Error('Invalid CPF'));
  })
  
  it('Deve validar um cpf vazio', () => {
    expect(() => new Cpf('')).toThrow(new Error('Invalid CPF'));
  })

})
