import { Button } from '@mui/material'
import { useQuestionStore } from './store/questions'

const LIMIT_QUESTIONS = 10

export const Start = () => {
  const getQuestions = useQuestionStore(state => state.fetchQuestion)

  const handleClick = () => {
    getQuestions(LIMIT_QUESTIONS)
  }
  return (
    <Button onClick={handleClick} variant="contained">
      Empezar
    </Button>
  )
}
