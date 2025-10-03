import './App.css'
import { Container, Typography, Stack } from '@mui/material'
import { JavascriptLogo } from './JavaScripLogo'
import Start from './Start'
import { useQuestionsStore } from './store/question'
import { Game } from './components/Game'
import { Finish } from './components/Finish'

function App() {

  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center" p={3}>
          <Typography variant="h2" component="h1" px={20}>
            <JavascriptLogo />
            Javascript Quiz
          </Typography>
        </Stack>
        {
          questions.length === 0
            ? <Start />
            : questions.filter(q => q.userSelectedAnswer !== undefined).length === 10
              ? <Finish  />
              : <Game />
        }

      </Container>
    </main>
  )
}

export default App
