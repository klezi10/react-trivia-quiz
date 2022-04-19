import React from "react"
import getKey from "./Getkey"

export default function Quiz(props) {
    const incorrectAnswers = props.incorrectAnswers
    const correctAnswer = props.correctAnswer

    const answersArray = []
    answersArray.push({
        id: getKey(),
        value: correctAnswer,
        isHeld: false
    })

    const eachIncorrectAnswer = incorrectAnswers.map(eachAnswer => {
        return eachAnswer
    })
    
    for (let i = 0; i < eachIncorrectAnswer.length; i++) {
      answersArray.push({
        id: getKey(),
          value: eachIncorrectAnswer[i],
          isHeld: false
        })  
    }

   console.log(answersArray)
    
    const shuffledAnswers = answersArray.sort((a, b) => 0.5 - Math.random())

    function handleClickAnswer() {
       console.log('clicked')
    }

    const styles = {
        backgroundColor: shuffledAnswers.isHeld ? "#D6DBF5" : "none"
    }

    return (
        <div className="Quiz">
           <p className="question">{props.question}</p>
                <div className="choices">
                {shuffledAnswers.map(eachAnswer => {
                        return (
                        <div key={getKey()}>
                            <p className="answer" style={styles} onClick={handleClickAnswer}>{eachAnswer.value}</p>
                        </div>
                        )
                    })}
                </div>
        </div>
    )
}