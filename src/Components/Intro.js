import React from "react"

export default function Intro(props) {
    return (
        <div className="Intro">
            <div className="intro-container">
                <h1 className="intro-title">Quizzical</h1>
                <p className="intro-description">See how much you know!</p>
                <button className="start-btn" onClick={props.startQuiz}>Start quiz</button>
            </div>
        </div>
    )
}