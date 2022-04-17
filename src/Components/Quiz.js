import React from "react"

export default function Quiz(props) {

    return (
        <div className="Quiz">
           <p className="question">{props.question}</p>
                <div className="choices">
                    <p className="answer">{props.correctAnswer}</p>
                    <p className="answer">Hola</p>
                    <p className="answer">Hola</p> 
                    <p className="answer">Hola</p> 
                </div>
        </div>
    )
}