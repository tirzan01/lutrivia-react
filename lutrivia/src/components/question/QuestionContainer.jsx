import React from 'react'
import Question from './Question'
import TrueOrFalseBtn from './TrueOrFalseBtn'

class QuestionContainer extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return <React.Fragment>
            <Question question={this.props.question} />
            <TrueOrFalseBtn setScore={this.props.setScore} question={this.props.question} trueOrFalseBtnPressed={this.props.trueOrFalseBtnPressed} index={this.props.index} isBtnPressed={this.props.isBtnPressed} />
        </React.Fragment>
    }
}

export default QuestionContainer