import React from 'react'

const style = {
    margin: '30px 800px 40px 20px', 
    width: '300px',
    height: '50px',
    fontWeight: 'bold',
    borderRadius: '9px',
    fontSize: '20px'
}

const NewGameBtn = ({ newGame }) => {
    return(
        <button onClick={newGame} style={style}>New Game</button>
    )
}

export default NewGameBtn