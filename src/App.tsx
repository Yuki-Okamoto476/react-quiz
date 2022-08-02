import { Button, Center, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  const question_list = [
    { id: 1, question: 'IT' },
    { id: 2, question: 'DVD' },
    { id: 3, question: 'CD' },
    { id: 4, question: 'USB' },
    { id: 5, question: 'PDF' },
    { id: 6, question: 'FAQ' },
    { id: 7, question: 'URL' },
    { id: 8, question: 'QR' },
    { id: 9, question: 'ZIP' },
    { id: 10, question: 'DIY' },
  ]
  const answer_list = [
    { id: 1, answer: 'Information Technology',  },
    { id: 2, answer: 'Digital Versatile Disc'},
    { id: 3, answer: 'Compact Disc'},
    { id: 4, answer: 'Universal Serial Bus'},
    { id: 5, answer: 'Portable Document Format'},
    { id: 6, answer: 'Frequently Asked Question'},
    { id: 7, answer: 'Universal Resource Locator'},
    { id: 8, answer: 'Quick Response'},
    { id: 9, answer: 'Zone Improvement Plan'},
    { id: 10, answer: 'Do It Yourself'},
  ]
  const [index, setIndex] = useState(1)
  const initial_number = 1
  const last_number = 10

  const goBackToPrevQuestion = () => {
    setIndex(index - 1)
  }

  const goToNextQuestion = () => {
    setIndex(index + 1)
  }

  return (
    <div>
      <Heading>Abbreviation Quiz</Heading>
      <Text align="center" fontSize={28}>
        Q{index}: {question_list[index - 1].question}
      </Text>
      <Text align="center" fontSize={28}>
        A: {answer_list[index - 1].answer}
      </Text>
      <Center>
        {index === initial_number ? (
          <Button colorScheme="blue" disabled>
            前の問題へ
          </Button>
        ) : (
          <Button colorScheme="blue" onClick={goBackToPrevQuestion}>
            前の問題へ
          </Button>
        )}
        {index === last_number ? (
          <Button colorScheme="blue" disabled>
            次の問題へ
          </Button>
        ) : (
          <Button
            colorScheme="blue"
            onClick={goToNextQuestion}
          >
            次の問題へ
          </Button>
        )}
      </Center>
    </div>
  )
}

export default App
