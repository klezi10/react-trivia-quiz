import React from "react"
import "../Components/styles/QuizAnswers.css"

export default function QuizAnswers(props) {

   const styles = {
       backgroundColor: props.isHeld ? "#D6DBF5" : "white"
   }

    return (
        <div className="quiz-answers" onClick={props.holdAnswer}>
            <p className="answer" style={styles} >{props.value}</p>      
        </div>
    )
}