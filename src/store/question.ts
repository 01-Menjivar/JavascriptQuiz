import { create } from 'zustand'
import { type Question } from '../types'
import confetti from 'canvas-confetti'
import { persist } from 'zustand/middleware'
import questionService from '../services/questionService'

interface State {
    questions: Array<Question>
    currentQuestion: number,
    fetchQuestions: (limit: number) => Promise<void>
    selectAnswer: (questionIndex: number, answerIndex: number) => void 
    nextQuestion: () => void
    previousQuestion: () => void
    resetQuiz: () => void
}

export const useQuestionsStore = create<State>()(persist((set) => ({
    questions: [],
    currentQuestion: 0,

    fetchQuestions: async (limit: number) => {
        const data = await questionService.getAll()
        const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
        set({ questions })
    },

    nextQuestion: () => set((state) => {
        const next = state.currentQuestion + 1
        if (next >= state.questions.length) {
            return state
        }
        return { currentQuestion: next }
    }),

    previousQuestion: () => set((state) => {
        const prev = state.currentQuestion - 1
        if (prev < 0) {
            return state
        }
        return { currentQuestion: prev }
    }),

    selectAnswer: (questionIndex: number, answerIndex: number) => {
        set((state) => {
            const newQuestions = [...state.questions]
            newQuestions[questionIndex] = {
                ...newQuestions[questionIndex],
                userSelectedAnswer: answerIndex,
                isCorrectUserAnswer: newQuestions[questionIndex].correctAnswer === answerIndex
            }
            if (newQuestions[questionIndex].isCorrectUserAnswer) {
                confetti()
            }   
            return { questions: newQuestions }
        })
    },

    resetQuiz: () => set({ questions: [], currentQuestion: 0 })
    


}), {
    name: 'questions'
}))