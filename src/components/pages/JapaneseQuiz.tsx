import { memo, FC, useState } from 'react'
import { Box, Button, Center, Flex, Text } from '@chakra-ui/react'
import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

export const JapaneseQuiz: FC = memo(() => {
  const questionList = [
    { id: 1, question: 'IT' },
    { id: 2, question: 'DVD' },
    { id: 3, question: 'CD' },
    { id: 4, question: 'ETC' },
    { id: 5, question: 'DIY' },
    { id: 6, question: 'USB' },
    { id: 7, question: 'PDF' },
    { id: 8, question: 'FAQ' },
    { id: 9, question: 'URL' },
    { id: 10, question: 'QR' },
  ]
  const answerList = [
    { id: 1, answer: 'Information Technology' },
    { id: 2, answer: 'Digital Versatile Disc（デジタル多用途ディスク）' },
    { id: 3, answer: 'Compact Disc' },
    {
      id: 4,
      answer: 'Electronic Toll Collection System（自動料金収受システム）',
    },
    { id: 5, answer: 'Do It Yourself' },
    { id: 6, answer: 'Universal Serial Bus' },
    { id: 7, answer: 'Portable Document Format' },
    { id: 8, answer: 'Frequently Asked Question' },
    { id: 9, answer: 'Universal Resource Locator' },
    { id: 10, answer: 'Quick Response' },
  ]
  const initialNumber = 1
  const lastNumber = 10

  const [index, setIndex] = useState(1)
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()

  const showAnswer = () => {
    setIsShow(true)
  }
  const goBackToPrevQuestion = () => {
    setIndex(index - 1)
    setIsShow(false)
  }
  const goToNextQuestion = () => {
    setIndex(index + 1)
    setIsShow(false)
  }
  const goBackToHome = () => {
    navigate("/")
  }

  return (
    <Flex justify="center" align="center" height="100vh">
      <Box>
        <Text align="center" fontSize={42}>
          問{index}: {questionList[index - 1].question}
        </Text>
        <Center>
          <Button
            rightIcon={<ArrowDownIcon />}
            colorScheme="blue"
            variant="outline"
            mt={8}
            onClick={showAnswer}
          >
            答え
          </Button>
        </Center>
        {isShow && (
          <Text align="center" fontSize={36} mt={8}>
            答: {answerList[index - 1].answer}
          </Text>
        )}
        <Box mt={8}>
          <Center>
            {index === initialNumber ? (
              <Button
                colorScheme="blue"
                mr={8}
                leftIcon={<ArrowBackIcon />}
                disabled
              >
                前の問題へ
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                mr={8}
                leftIcon={<ArrowBackIcon />}
                onClick={goBackToPrevQuestion}
              >
                前の問題へ
              </Button>
            )}
            {index === lastNumber ? (
              <Button
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                disabled
              >
                次の問題へ
              </Button>
            ) : (
              <Button
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                onClick={goToNextQuestion}
              >
                次の問題へ
              </Button>
            )}
          </Center>
          <Center>
            <Button mt={8} onClick={goBackToHome}>TOPへ戻る</Button>
          </Center>
        </Box>
      </Box>
    </Flex>
  )
})
