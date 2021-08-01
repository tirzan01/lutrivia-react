import React from 'react'
import NewGameBtn from './NewGameBtn'
import ScoreKeeper from './ScoreKeeper'
import Lutrivia from './Lutrivia'
import DetailForm from './DetailForm'
import data from '../data'

const scoreKeeperStyle = {
    display: 'flex',
}

const questionSelecter = () => {
    let selectedQuestion = []
    let indexs = []
    while(selectedQuestion.length < 4) {
        let i = Math.floor(Math.random() * 10)
        if(!indexs.includes(i)){
            indexs.push(i)
            selectedQuestion.push(data.questions[i])
        }
    }
    return selectedQuestion
}

class LutriviaContainer extends React.Component {
    
    constructor() {
        super()

        this.state = {
            score: 0,
            questions: questionSelecter(),
            isBtnPressed: [0, 0, 0, 0],
            name: '',
        }
    }

    trueOrFalseBtnPressed = index => {
        let isBtnPressed = [...this.state.isBtnPressed]
        isBtnPressed[index] = 1
        this.setState({isBtnPressed})
    }

    setScore = () => {
        this.setState(prevState => {
            return {score: prevState.score + 1}
        })
    }

    newGame = () => {
        this.setState({
            score: 0,
            questions: questionSelecter(),
            isBtnPressed: [0, 0, 0, 0],
            name: '',
        })
    }

    handleNameInput = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if(this.state.name.length > 0) {
            let gameDetail = {name: this.state.name, score: this.state.score}
            fetch('http://localhost:3001/profile', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gameDetail)
            })
                .then(resp => resp.json)
                .then(json => {
                    this.setState({
                        score: 0,
                        questions: questionSelecter(),
                        isBtnPressed: [0, 0, 0, 0],
                        name: '',
                    })
                })
        }
    }

    render() {
        return (<div>
            <h1>Lutrivia</h1>
            <div style={scoreKeeperStyle}>
                <NewGameBtn newGame={this.newGame} />
                <ScoreKeeper score={this.state.score} />
            </div>
            <Lutrivia questions={this.state.questions} setScore={this.setScore} trueOrFalseBtnPressed={this.trueOrFalseBtnPressed} isBtnPressed={this.state.isBtnPressed} />
            <DetailForm handleNameInput={this.handleNameInput} name={this.state.name} handleSubmit={this.handleSubmit} />
        </div>)
    }
}

export default LutriviaContainer