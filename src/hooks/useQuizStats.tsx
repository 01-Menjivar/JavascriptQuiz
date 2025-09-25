import { useQuestionsStore } from "../store/question"

export const useQuizStats = () => {
    const questions = useQuestionsStore(state => state.questions)
    
    const score = questions.filter(q => q.isCorrectUserAnswer === true).length
    const unanswered = questions.filter(q => q.userSelectedAnswer === undefined).length
    const total = questions.length
    
    return {
        score,
        total,
        unanswered,
    }
}