import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from '@chakra-ui/react'
import { login } from '../services/login'
import { useState } from 'react'

export const LoginForm = () => {
  const [email, setEmail] = useState('')

  function handleEmailChange(event: any) {
    setEmail(event.target.value)
  }

  const [password, setPassword] = useState('')

  function handlePasswordChange(event: any) {
    setPassword(event.target.value)
  }
  return (
    <>
      <Container width={300}>
        <Center marginBottom={2}>
          <Heading as="h2" size="1xl" noOfLines={1}>
            Faça o login
          </Heading>
        </Center>
        <FormControl isRequired>
          <FormLabel>Email:</FormLabel>
          <Input
            placeholder="ex: email@email.com"
            type="email"
            marginBottom={1}
            value={email}
            onChange={handleEmailChange}
          />
          <FormLabel>Senha:</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Center marginTop={4}>
            <Button
              colorScheme="teal"
              size="sm"
              type="submit"
              onClick={() => {
                login(email, password)
              }}
            >
              Entrar
            </Button>
          </Center>
        </FormControl>
      </Container>
    </>
  )
}
