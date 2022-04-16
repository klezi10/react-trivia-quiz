import React from "react"

export default function Intro(props) {
    return (
        <div className="Intro">
            <h1>Hello from Intro</h1>
            <button onClick={props.showQuiz}>Click moi</button>
        </div>
    )
}