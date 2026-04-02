import { create } from 'zustand'
import confetti from 'canvas-confetti'

import type { Question } from '../types'

interface State {
  questions: Question[]
  currentQuestion: number
  fetchQuestion: (limitNumber: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
}

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestion: async (limitNumber: number) => {
    const res = await fetch('http://localhost:5173/data.json')
    const json = await res.json()

    const questions = json.sort(() => Math.random() - 0.5).slice(0, limitNumber)
    set({ questions })
  },
  selectAnswer: (questionId: number, answerIndex: number) => {
    const { questions } = get()
    const newQuestions = structuredClone(questions)

    // Find the question by its id
    const questionIndex = newQuestions.findIndex(question => question.id === questionId)

    // Get its information
    const questionInfo = newQuestions[questionIndex]
    const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex

    if (isCorrectUserAnswer) confetti()

    // Mutate the question data
    newQuestions[questionIndex] = {
      ...questionInfo,
      isCorrectUserAnswer,
      userSelectedAnswer: answerIndex,
    }

    set({ questions: newQuestions })
  },
}))
