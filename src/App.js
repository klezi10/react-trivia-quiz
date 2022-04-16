import React, { useState } from "react"
import "./style.css"
import Intro from "./Components/Intro"
import Quiz from "./Components/Quiz"

export default function App() {
    const [loaded, setLoaded] = useState(true)

    function startQuiz() {
        return setLoaded(true) 
    }

   if (loaded) {
       return (
           <div className="App">
               <Quiz />
               
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