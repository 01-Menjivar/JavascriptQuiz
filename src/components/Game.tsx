import { Typography, Stack, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material"
import { useQuestionsStore } from "../store/question"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import { useQuizStats } from "../hooks/useQuizStats"
import { Question } from "../components/Question"
import { Explanation } from "./Explanation"
import { useState } from "react"

export const Game = () => {
    const questions = useQuestionsStore((state) => state.questions)
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const previousQuestion = useQuestionsStore((state) => state.previousQuestion)
    const nextQuestion = useQuestionsStore((state) => state.nextQuestion)
    const resetQuiz = useQuestionsStore((state) => state.resetQuiz)
    const questionInfo = questions[currentQuestion]
    const { score, total, unanswered } = useQuizStats()

    const [isExplanationOpen, setIsExplanationOpen] = useState(false)

    const handleOpenExplanation = () => setIsExplanationOpen(true)
    const handleCloseExplanation = () => setIsExplanationOpen(false)

    return (
        <>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center" marginY={2}>
                <Typography variant="h6" color="white">
                    Puntaje: {score}
                </Typography>
                <IconButton onClick={previousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIos />
                </IconButton>
                <Typography variant="h6" color="white" textAlign="center">
                    {currentQuestion + 1}/{total}
                </Typography>
                <IconButton onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} questionIndex={currentQuestion} />
            <Typography variant="h6" color="white">
                Te quedan {unanswered} preguntas sin contestar
            </Typography>
            <Button onClick={resetQuiz} variant="contained" color="primary" sx={{
                margin: 3
            }}>
                Reiniciar Quiz
            </Button>
            <Button
                disabled={questionInfo.userSelectedAnswer === undefined}
                onClick={handleOpenExplanation}
                variant="outlined"
                sx={{ margin: 1 }}
            >
                Explicame
            </Button>


            <Dialog
                open={isExplanationOpen}
                onClose={handleCloseExplanation}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        bgcolor: '#333',
                        color: 'white'
                    }
                }}
            >

                <DialogTitle>
                    <Typography variant="h5">
                        Explicación - Pregunta {currentQuestion + 1}
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <Explanation question={questionInfo} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseExplanation} variant="contained" color="primary">
                        Cerrar
                    </Button>
                </DialogActions>

            </Dialog>


            <Typography variant="body2" color="gray" textAlign="center" sx={{ marginBottom: 3 }}>
                Desarrollado con Typescript y Zustand por <a href="https://github.com/01-Menjivar">Oscar Menjivar</a>
            </Typography>
        </>
    )
}