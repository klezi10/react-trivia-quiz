import React from "react"
import QuizTest from "./QuizTest"
import "./QuizResults.css"
import CheckAnswersBtn from "./CheckAnswersBtn"

export default function QuizResults(props) {
    // console.log(props.results)

    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
    }

    return (
        <form className="QuizResults" onSubmit={handleSubmit}>
            {props.results.map(result => (
                <QuizTest
                    key={Math.random().toString()}
                    question={result.question}
                    correctAnswer={result.correct_answer}
                    incorrectAnswers={result.incorrect_answers}
                />
                
            ))}
              <CheckAnswersBtn />
        </form>
    )
}