import React from "react"

export default function Intro(props) {
    return (
        <div className="Intro">
            <h1 className="intro-title">Quizzical</h1>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
}