import React from "react"
import "./QuizAnswers.css"

export default function QuizAnswers(props) {
//    console.log(props.value)
    return (
        <div className="quiz-answers">
            <p className="answer">{props.value}</p>      
        </div>
    )
}