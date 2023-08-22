import { ChakraProvider, Heading, Box, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const Header = () => {
  return (
    <ChakraProvider>
      <Box>
        <Flex>
          <Heading as="h1" size="3xl" noOfLines={1} color="#FFFFFF">
            <Tittle>Dio Bank</Tittle>
          </Heading>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

const Tittle = styled.div`
  font-family: 'Kanit', sans-serif;
`
