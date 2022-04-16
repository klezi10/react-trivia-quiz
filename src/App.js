import React, { useState } from "react"
import "./style.css"
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz"
import axios from "axios"

export default function App() {
    const [loaded, setLoaded] = useState(false)
    // const [questions, setQuestions] = useState()

    function startQuiz() {
        setLoaded(true)
        getQuestions()
    }

    function getQuestions() {
        axios.get('https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple').then(handleResponse)
    }

    function handleResponse(response) {
        console.log(response.data.results)
    }

   if (loaded) {
       return (
           <div className="App">
                <div className="question-container">
                    <Quiz 
                        question="How would one say goodbye in Spanish?" />
                    <Quiz 
                        question="Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?"/>
                    <Quiz
                        question="What is the hottest planet in our Solar System?" />
                    <Quiz
                        question="In which country was the caesar salad invented?" />
                    <Quiz 
                        question="How Many Hearts Does An Octopus Have?" />

                    <button className="check-answers">Check answers</button>
               </div>
           </div>
       )
   } else {
       return (
           <div className="App"> 
                   <Intro startQuiz={startQuiz}/>
           </div>
       )
   }
}