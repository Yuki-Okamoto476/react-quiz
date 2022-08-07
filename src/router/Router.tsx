import { EnglishQuiz } from 'components/pages/EnglishQuiz'
import { Home } from 'components/pages/Home'
import { JapaneseQuiz } from 'components/pages/JapaneseQuiz'
import { FC, memo } from 'react'
import { Route, Routes } from 'react-router-dom'

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/japanese_quiz" element={<JapaneseQuiz />} />
      <Route path="/english_quiz" element={<EnglishQuiz />} />
    </Routes>
  )
})
