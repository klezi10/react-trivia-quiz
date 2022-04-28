import React from "react"

function Quiz(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5" : "white"
    }

    return (
        <div className="Quiz">
            <p className="answer" style={styles} onClick={props.holdAnswer}>
                {props.value}
            </p>
        </div>
    )
}