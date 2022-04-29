import React, { useState, useEffect } from "react"
import Intro from "./Components/Intro"
import QuizResults from "./Components/QuizResults"
import "./style.css"

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [results, setResults] = useState([]);

    function startQuiz() {
        setLoaded(true)
    }

    useEffect(() => {
        function getApi() {
            fetch('https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple')
            .then(response => response.json())
            .then(data => {
                console.log(data.results)
                setResults(data.results)
            })
        }
        getApi()
    }, [])

    return (
        loaded
            ?
            <div className="App">
                <div className="question-container">
                    <QuizResults 
                        results={results}
                    />
                </div>
            </div>
            :
            <div className="App">
                <Intro startQuiz={startQuiz} />
            </div>
    )
}