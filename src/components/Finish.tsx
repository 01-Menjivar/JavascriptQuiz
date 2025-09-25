import { Button, Stack, Typography } from "@mui/material"
import { useQuizStats } from "../hooks/useQuizStats"
import { useQuestionsStore } from "../store/question"

export const Finish = () =>{

    const {total, score} = useQuizStats()
    const resetQuiz = useQuestionsStore((state) => state.resetQuiz)

    return(
        <Stack justifyContent="center" alignItems="center" gap={2} marginY={2}>
            <Typography variant="h4" color="white">
                ¡Has completado el quiz!
            </Typography>
            <Typography variant="h6" color="white">
                Tu puntaje final es {score} de {total}
            </Typography>
            <Button variant="contained" color="primary" onClick={resetQuiz}>
                Reiniciar Quiz
            </Button>
        </Stack>
    )
}