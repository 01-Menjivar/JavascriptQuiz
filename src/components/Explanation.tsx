import { Typography, Paper } from "@mui/material"
import { type Question } from "../types"

interface ExplanationProps {
    question: Question
}

export const Explanation = ({ question }: ExplanationProps) => {
    return (
        <Paper sx={{ p: 2, bgcolor: 'transparent', boxShadow: 'none' }}>
            <Typography variant="h6" gutterBottom color="primary">
                Explicación:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                {question.explanation}
            </Typography>
        </Paper>
    )
}