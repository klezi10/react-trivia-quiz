import React from "react"

export default function Quiz(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "none"
    }

    return (
        <div className="Quiz">
            <p className="answer" style={styles} onClick={props.handleClickAnswer}>{props.answers}</p>
        </div>
    )
}