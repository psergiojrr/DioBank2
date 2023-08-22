import { login } from './login'

describe('login', () => {
  it('Deve exibir um alerta de Bem Vindo ao usuário', () => {
    const mockedMessage = jest.fn()
    window.alert = mockedMessage

    login('email@mail.com', 'password')
    expect(mockedMessage).toHaveBeenCalledWith('Seja bem vindo!')
  })
})
