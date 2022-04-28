import React from "react"
import QuizAnswers from "./QuizAnswers"
import "./QuizTest.css"

export default function QuizTest(props) {
    
    // const [answersArray, setAnswersArray] = useState([])

    const answersArray = []

    const eachIncorrectAnswer = props.incorrectAnswers.map(eachAnswer => {
        return eachAnswer
    })
    // console.log(eachIncorrectAnswer)
    answersArray.push({
        value: props.correctAnswer
    })


    for (let i = 0; i < eachIncorrectAnswer.length; i++) {
        answersArray.push({
           value: eachIncorrectAnswer[i]
        })
    }

    answersArray.sort((a, b) => 0.5 - Math.random())
    // console.log(answersArray)
    // setAnswersArray(answersArray)

    // const seeAnswers = answersArray.map(answers => {
    //     return (
    //         <QuizAnswers 
    //             key={Math.random().toString()}
    //             value={answers.value}
    //         />
    //     )
    // })

    // console.log(props.incorrectAnswers)
    return (
        <div className="QuizTest">
            <div className="question">
                {props.question}
            </div>
            <div className="QuizAnswers-answers">
                {answersArray.map(answer => (
                    <QuizAnswers 
                        key={Math.random().toString()}
                        value={answer.value}
                    />
                ))}
            </div>
        </div>
    )
}