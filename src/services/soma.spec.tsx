import { soma } from './soma'

describe('soma', () => {
  it('Deve retornar o número informado somado de 1', () => {
    const value = soma(1)
    expect(value).toBe(2)
  })
})
