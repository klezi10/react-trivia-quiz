import React from "react"
import getKey from "./Getkey"
import Quiz from "./Quiz"

export default function QuizData(props) {
    const answersArray = []

    const incorrectAnswers = props.incorrectAnswers
    const correctAnswer = props.correctAnswer

    answersArray.push({
        id: getKey(),
        value: correctAnswer,
        isHeld: false
    })

    const eachIncorrectAnswer = incorrectAnswers.map(eachAnswer => {
        return eachAnswer
    })

    for (let i = 0; i < eachIncorrectAnswer.length; i++) {
        answersArray.push({
            id: getKey(),
            value: eachIncorrectAnswer[i],
            isHeld: false
        })
    }

    answersArray.sort((a, b) => 0.5 - Math.random())
    console.log(answersArray)

    const allAnswers = answersArray.map(eachAnswer => {
        return (
            <Quiz
                key={getKey()}
                isHeld={false}
                answers={eachAnswer.value}
                handleClickAnswer={() => handleClickAnswer(eachAnswer.value)}
            />
        )
    })

    function handleClickAnswer() {
        console.log('clicked')
    }

    return (
        <div className="QuizData">
            <p className="question">{props.question}</p>
            <div className="quiz-answers">
                {allAnswers}
            </div>
        </div>
    )
}