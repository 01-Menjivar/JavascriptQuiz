import axios from "axios"
import {type Question } from "../types"
const BASE_URL = '/data.json'

interface QuestionService{
    getAll: () => Promise<Question[]>
}

const getAll = async (): Promise<Question[]> => {
    try {
        const response = await axios.get<Question[]>(BASE_URL)
        return response.data
    } catch (error) {
        console.error('Error fetching questions:', error)
        throw new Error('Failed to fetch questions. Please try again.')
    }
}

export default {
    getAll
} satisfies QuestionService