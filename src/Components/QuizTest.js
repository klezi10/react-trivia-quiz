import React, { useState } from "react"
import QuizAnswers from "./QuizAnswers"
import "../Components/styles/QuizTest.css"

export default function QuizTest(props) {
    const [answers, setAnswers] = useState(allAnswers())
    const [count, setCount] = useState(0)
 
    function allAnswers() {
       const answersArray = []
       for (let i = 0; i < props.incorrectAnswers.length; i++) {
        answersArray.push({
            id: Math.random().toString(),
            value: props.incorrectAnswers[i],
            correct: false,
            isHeld: false
        })
    }
        answersArray.push({
            id: Math.random().toString(),
            value: props.correctAnswer,
            correct: true,
            isHeld: false
        })
        return answersArray.sort((a, b) => 0.5 - Math.random())
    }

    function holdAnswer(id, correct) {
        setAnswers(prevState => prevState.map(eachAnswer => {
            return eachAnswer.id === id ?
                { ...eachAnswer, isHeld: !eachAnswer.isHeld } : eachAnswer
        }))
        if (correct) {
            setCount(prevCount => prevCount + 1)
        }
       
    }
    console.log(count)
    return (
        <div className="QuizTest">
            <div className="question">
                {props.question}
            </div>
            <div className="QuizAnswers-answers">
                {answers.map(answer => (
                    <QuizAnswers
                        key={Math.random().toString()}
                        id={answer.id}
                        value={answer.value}
                        correct={answer.correct}
                        isHeld={answer.isHeld}
                        holdAnswer={() => holdAnswer(answer.id, answer.correct)}
                    />
                ))}
            </div>
        </div>
    )
}