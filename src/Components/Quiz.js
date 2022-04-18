import React from "react"
import getKey from "./Getkey"

export default function Quiz(props) {
    const incorrectAnswers = props.incorrectAnswers
    const correctAnswer = props.correctAnswer

    const answersArray = []
    answersArray.push(correctAnswer)

    const eachOne = incorrectAnswers.map(eachAnswer => {
        return eachAnswer
    })
    
    for (let i = 0; i < eachOne.length; i++) {
      answersArray.push(eachOne[i])  
    }
    
    const shuffledAnswers = answersArray.sort((a, b) => 0.5 - Math.random())

    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "none"
    }

    return (
        <div className="Quiz">
           <p className="question">{props.question}</p>
                <div className="choices">
                {shuffledAnswers.map(eachAnswer => {
                        return (
                        <div key={getKey()}>
                            <p className="answer" style={styles}>{eachAnswer}</p>
                        </div>
                        )
                    })}
                </div>
        </div>
    )
}