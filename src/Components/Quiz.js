import React from "react"
import getKey from "./Getkey"

export default function Quiz(props) {
    let eachAnswer = props.incorrectAnswers

    return (
        <div className="Quiz">
           <p className="question">{props.question}</p>
                <div className="choices">
                    <p className="answer">{props.correctAnswer}</p>
                {eachAnswer.map(answer => {
                        return (
                        <div key={getKey()}>
                            <p className="answer">{answer}</p>
                        </div>
                        )
                    })}
                </div>
        </div>
    )
}


// answersIndexPositions = [0,1,2,3]; //scramble this.

// answersIndexPositions.forEach( position => {
//     answersArray[position]; 
// })
// answersArray[position]