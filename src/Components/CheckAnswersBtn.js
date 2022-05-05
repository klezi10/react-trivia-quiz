import React from "react"

export default function CheckAnswersBtn(props) {
    // function submitHandler(event) {
    //     console.log(event)
    // }

    return (
        <button type={props.type} className="CheckAnswersBtn check-answers">{props.children}</button>
    )
}