import { Box, Center, ChakraProvider } from '@chakra-ui/react'
import { Header } from './Header'
import { LoginForm } from './LoginForm'

export const LoginCard = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc">
        <Center
          display="flex"
          flexDirection="column"
          verticalAlign="true"
          h="100vh"
        >
          <Header />
          <Box
            backgroundColor="#FFFFFF"
            padding="25px"
            borderRadius="25px"
            maxWidth={400}
            marginTop={20}
            marginBottom={40}
          >
            <LoginForm />
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  )
}
