import React from "react"
import "../Components/styles/QuizAnswers.css"

export default function QuizAnswers(props) {
//    console.log(props.value)

   const styles = {
       backgroundColor: props.isHeld ? "blue" : "white"
   }

    return (
        <div className="quiz-answers">
            <p className="answer" style={styles} onClick={props.holdAnswer}>{props.value}</p>      
        </div>
    )
}