import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

import { Footer } from './Footer'
import { Question } from './Question'
import { useQuestionStore } from '../store/questions'

export const Game = () => {
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const goNextQuestion = useQuestionStore(state => state.goNextQuestion)
  const goPreviousQuestion = useQuestionStore(state => state.goPreviousQuestion)

  const questionInfo = questions[currentQuestion]

  return (
    <>
      <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
        <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
          <ArrowBackIosNew />
        </IconButton>
        {currentQuestion + 1} / {questions.length}
        <IconButton onClick={goNextQuestion} disabled={currentQuestion === questions.length - 1}>
          <ArrowForwardIos />
        </IconButton>
      </Stack>

      <Question info={questionInfo} />

      <Footer />
    </>
  )
}
