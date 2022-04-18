import React from "react"
import getKey from "./Getkey"

export default function Quiz(props) {
    const incorrectAnswers = props.incorrectAnswers
    const correctAnswer = props.correctAnswer

    let answersArray = []
    answersArray.push(correctAnswer)

    const eachOne = incorrectAnswers.map(eachAnswer => {
        return (
            eachAnswer
        )
    })
    
    for (let i = 0; i < eachOne.length; i++) {
      answersArray.push(eachOne[i])  
    }
    
    const shuffledArray = answersArray.sort((a, b) => 0.5 - Math.random())
    console.log(answersArray)

    return (
        <div className="Quiz">
           <p className="question">{props.question}</p>
                <div className="choices">
                {shuffledArray.map(eachAnswer => {
                        return (
                        <div key={getKey()}>
                            <p className="answer">{eachAnswer}</p>
                        </div>
                        )
                    })}
                </div>
        </div>
    )
}