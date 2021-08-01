import React, { useEffect } from 'react'

const TrueOrFalseBtn = ({ setScore, question, trueOrFalseBtnPressed, index, isBtnPressed}) => {

    const handleClick = e => {
        trueOrFalseBtnPressed(index)
        if(e.target.value === `${question.answer}`){
            setScore()
        }
    }

    return <React.Fragment>
        <button disabled={isBtnPressed[index]} onClick={handleClick} value='true'>true</button>
        <button disabled={isBtnPressed[index]} onClick={handleClick} value='false'>false</button>
    </React.Fragment>
}

export default TrueOrFalseBtn