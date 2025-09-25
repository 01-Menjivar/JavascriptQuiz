export interface Question {
    id: number
    question: string
    code: string
    answers: Array<string>
    correctAnswer: number
    userSelectedAnswer?: number
    isCorrectUserAnswer?: boolean
    explanation: string
}