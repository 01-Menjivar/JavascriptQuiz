import { type Question as QuestionType } from "../types"

export const getButtonStyle = (info: QuestionType, index: number) => {
    if (info.userSelectedAnswer === undefined) {
        return { '&:hover': { backgroundColor: '#555' } }
    }

    if (index === info.correctAnswer) {
        return {
            backgroundColor: '#4CAF50',
            color: 'white',
            '&:hover': { backgroundColor: '#4CAF50' }
        }
    }

    if (info.userSelectedAnswer === index && !info.isCorrectUserAnswer) {
        return {
            backgroundColor: '#F44336',
            color: 'white',
            '&:hover': { backgroundColor: '#F44336' }
        }
    }

    return {}
}