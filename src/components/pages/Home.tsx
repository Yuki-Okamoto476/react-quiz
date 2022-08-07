import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react'
import { memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home: FC = memo(() => {
  const navigate = useNavigate()

  const goToJapaneseQuiz = () => {
    navigate('/japanese_quiz')
  }
  const goToEnglishQuiz = () => {
    navigate('/english_quiz')
  }

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box>
        <Heading>Abbreviation & Acronym Quiz</Heading>
        <Center mt={8}>
          <Button
            colorScheme="blue"
            variant="outline"
            mr={8}
            onClick={goToJapaneseQuiz}
          >
            日本語
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={goToEnglishQuiz}
          >
            英語
          </Button>
        </Center>
      </Box>
    </Flex>
  )
})
