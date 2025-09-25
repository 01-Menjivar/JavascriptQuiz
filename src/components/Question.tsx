import { useQuestionsStore } from "../store/question"
import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter"
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import {type Question as QuestionType} from "../types"
import { getButtonStyle } from "../utils/questionStyles"

export const Question = ({ info, questionIndex }: { info: QuestionType, questionIndex: number }) => {
    const selectAnswer = useQuestionsStore((state) => state.selectAnswer)

    const handleClick = (index: number) => {
        if (info.userSelectedAnswer === undefined) {
            selectAnswer(questionIndex, index)
        }
    }

    return (
        <div>
            <Card variant="outlined" sx={{ textAlign: 'left', bgcolor: '#222', padding: 2 }}>
                <Typography variant="h5" color="white">
                    {info.question}
                </Typography>

                <SyntaxHighlighter language="javascript" style={gradientDark}>
                    {info.code}
                </SyntaxHighlighter>

                <List sx={{ bgcolor: '#333' }}>
                    {info.answers.map((answer, index) => (
                        <ListItem key={index} divider disablePadding>
                            <ListItemButton
                                sx={getButtonStyle(info, index)}
                                onClick={() => handleClick(index)}
                                disabled={info.userSelectedAnswer !== undefined}
                            >
                                <ListItemText sx={{ textAlign: "center" }} primary={answer} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Card>
        </div>
    )
}