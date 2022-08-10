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
    { id: 1, question: '食パン' },
    { id: 2, question: 'ボールペン' },
    { id: 3, question: '教科書' },
    { id: 4, question: 'ブログ' },
    { id: 5, question: '割り勘' },
    { id: 6, question: 'ディスる' },
    { id: 7, question: 'ピアノ' },
    { id: 8, question: 'チューハイ' },
    { id: 9, question: 'シャーペン' },
    { id: 10, question: 'カラオケ' },
  ]
  const answerList = [
    { id: 1, answer: '主食用パン' },
    { id: 2, answer: 'ボールポイントペン' },
    { id: 3, answer: '教科用図書' },
    { id: 4, answer: 'ウェブログ',},
    { id: 5, answer: '割前勘定' },
    { id: 6, answer: 'ディスリスペクト（disrespect）' },
    { id: 7, answer: 'クラヴィチェンバロ・コル・ピアノ・エ・フォルテ' },
    { id: 8, answer: '焼酎ハイボール' },
    { id: 9, answer: 'エバー・レディー・シャープペンシル' },
    { id: 10, answer: '空オーケストラ' },
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
