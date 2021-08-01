import React from 'react'
import QuestionContainer from './question/QuestionContainer'

class Lutrivia extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return this.props.questions.map((question,index)=> <QuestionContainer question={question} setScore={this.props.setScore} trueOrFalseBtnPressed={this.props.trueOrFalseBtnPressed} index={index} isBtnPressed={this.props.isBtnPressed} />)
    }
}

export default Lutrivia