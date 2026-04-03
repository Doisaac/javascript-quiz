import { useQuestionData } from '../hooks/useQuestionData'
import { useQuestionStore } from '../store/questions'

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData()
  const { reset } = useQuestionStore()

  return (
    <footer
      style={{
        marginTop: '16px',
      }}
    >
      <strong>{`✅ ${correct} correctas - ⛔${incorrect} incorrectas - ❓${unanswered} sin responder`}</strong>

      <div style={{ marginTop: '8px' }}>
        <button onClick={() => reset()}>Reset Game</button>
      </div>
    </footer>
  )
}
