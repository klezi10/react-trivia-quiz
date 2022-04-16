import React, { useState } from "react"
import "./style.css"
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz"

export default function App() {
    const [loaded, setLoaded] = useState(false)

    function startQuiz() {
        return setLoaded(true) 
    }

   if (loaded) {
       return (
           <div className="App">
                <div className="question-container">
                    <Quiz />
                    <Quiz />
                    <Quiz />
                    <Quiz />
                    <Quiz />
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




// 2 components: intro-page & quiz
// use state to control which page to show
//               once you click start quiz btn, set state to loaded (quiz page) & set conditional rendering