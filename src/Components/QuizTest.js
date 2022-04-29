import React, { useState } from "react"
import QuizAnswers from "./QuizAnswers"
import "../Components/styles/QuizTest.css"

export default function QuizTest(props) {
    const [answersArray, setAnswersArray] = useState([])

    let correctAnswer = props.correctAnswer

    const eachIncorrectAnswer = props.incorrectAnswers.map(eachAnswer => {
        return eachAnswer
    })

    answersArray.push({
        id: Math.random().toString(),
        value: correctAnswer,
        correct: true,
        isHeld: false
    })


    for (let i = 0; i < eachIncorrectAnswer.length; i++) {
        answersArray.push({
            id: Math.random().toString(),
           value: eachIncorrectAnswer[i],
           correct: false,
           isHeld: false
        })
    }

    answersArray.sort((a, b) => 0.5 - Math.random())
   
    function holdAnswer(event, id) {
        console.log(event)
        // setAnswersArray(prevState => prevState.map(eachAnswer => {
        //     return eachAnswer.id === id ?
        //     {isHeld: !eachAnswer.isHeld} : eachAnswer
        // }))
    }

    return (
        <div className="QuizTest">
            <div className="question">
                {props.question}
            </div>
            <div className="QuizAnswers-answers">
                {answersArray.map(answer => (
                    <QuizAnswers 
                        key={Math.random().toString()}
                        id={answer.id}
                        value={answer.value}
                        correct={answer.correct}
                        isHeld={answer.isHeld}
                        holdAnswer={() => holdAnswer(answer.id)}
                    />
                ))}
            </div>
        </div>
    )
}