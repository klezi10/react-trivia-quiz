import React, { useState } from "react"
import "./style.css"
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz"
import getKey from "./Components/Getkey"
// import axios from "axios"

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);

    function startQuiz() {
        setLoaded(true)
        getQuestions()
    }

    function getQuestions() {
        fetch('https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(data => {
                // const results = data.results
                setResults(data.results)
            })
    }

    const questions = results.map(result => {
            return (
                <Quiz 
                    key={getKey()}
                    question={result.question}
                    correctAnswer={result.correct_answer}
                    incorrectAnswers={result.incorrect_answers}
                />
            );
        });

       return (
           loaded 
            ?
            <div className="App">
                <div className="question-container">
                {questions}

                <button className="check-answers">Check answers</button>
                </div>
            </div>
            :
            <div className="App"> 
                    <Intro startQuiz={startQuiz}/>
            </div>
       )
}


    // const answersArray = []

    // function handleResponse(response) {
    //     const results = response.data.results
    //     callFunction(results)
    //     return {
    //         question: results.question,
    //         correctAnswer: results.correct_answer,
    //         incorrectAnswers: results.incorrect_answers,
    //         isHeld: false,
    //         // id: getKey()
    //     }
    // }

    // function callFunction(results) {
    //     console.log(results)
    //     setResults(results)
    // }