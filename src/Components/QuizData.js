import React, { useState } from "react"
import getKey from "./Getkey"
import Quiz from "./Quiz"

export default function QuizData(props) {
    const [answersArray, setAnswersArray] = useState([])
    // const answersArray = []

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

    //================needs work
    function handleClickAnswer(id) {
        console.log('clicked')
        setAnswersArray(oldAnswers => oldAnswers.map(oldAnswer => {
            return oldAnswer.id === id ?
            {...oldAnswer, isHeld: !oldAnswer.isHeld} : oldAnswer
        }))
    }
//=============================================================

    const allAnswers = answersArray.map(eachAnswer => {
        return (
            <Quiz
                key={getKey()}
                isHeld={eachAnswer.isHeld}
                answers={eachAnswer.value}
                handleClickAnswer={() => handleClickAnswer(eachAnswer.id)}
            />
        )
    })

    
    return (
        <div className="QuizData">
            <p className="question">{props.question}</p>
            <div className="quiz-answers">
                {allAnswers}
            </div>
        </div>
    )
}