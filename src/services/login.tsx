export const login = (email: string, password: string) => {
  if (email && password) {
    return alert('Seja bem vindo!')
  }
  alert('Insira seu email e sua senha!')
}
